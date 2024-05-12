// Global variables for PDF document, page number, text, canvas, and context
var pdfDoc = null, pageNum = 1, pageText ='', canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');

// Array to store page numbers or page ranges
var pages = ['1', '1', '0', '0', '1-4', '5-10', '0', '11-16','17-21'];

// Append canvas to pdfViewer only once
document.getElementById('pdfViewer').appendChild(canvas);

// Event listener for file input change
document.getElementById('fileInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    // Check if the file is a PDF
    if (file.type !== 'application/pdf') {
        console.error(file.name + ' is not a PDF file.');
        return;
    }

    var fileReader = new FileReader();
    fileReader.onload = function() {
        var typedarray = new Uint8Array(this.result);

        // Load PDF document using pdf.js
        var loadingTask = pdfjsLib.getDocument(typedarray);
        loadingTask.promise.then(function(pdf) {
            console.log('PDF loaded');
            pdfDoc = pdf; // Store the PDF document globally
            renderPage(pageNum); // Render the first page
            $("#fileInput").hide();
            $("#pageNumber").html(pageNum);
        }, function(reason) {
            console.error(reason);
        });
    };
    fileReader.readAsArrayBuffer(file);
});

// Function to render a page
function renderPage(num) {
    $("#urlForm").hide();
    $("#pageNext").show();
    $("#pagePrev").show();
    
    pdfDoc.getPage(num).then(function(page) {
        $("#pageNumber").html(num);
        $(".page").hide();
        $("#p"+num).show();

        // Set scale for rendering
        var scale = 1.2;
        var viewport = page.getViewport({ scale: scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render the page content to canvas
        var renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };
        var renderTask = page.render(renderContext);
        renderTask.promise.then(function() {
            return page.getTextContent();
        }).then(function(textContent) {
            // Extract text content from page
            var strings = textContent.items.map(function(item) { return item.str; });
            var textStr = strings.join(" "); // Join all text strings into a single string with spaces
            pageText = (textStr); // Store the readable text
            $("#pdfViewer").append("<details><summary>Text content</summary>"+pageText+"</details>");

        });
    });
}

// Event listeners for page navigation buttons
document.getElementById('pageNext').addEventListener('click', function() {
    if (pageNum >= pdfDoc.numPages) {
        return;
    }
    pageNum++;
    renderPage(pageNum);
});

document.getElementById('pagePrev').addEventListener('click', function() {
    if (pageNum <= 1) {
        return;
    }
    pageNum--;
    renderPage(pageNum);
});


// Function to get base64 representation of a file
function getFileBase64(file, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
    reader.onerror = (error) => console.log('Error: ', error);
}

// Function to send a message
function sendMessage() {
    const input = document.getElementById('chatbotInput');
    const message = input.value.trim();
    //const imageInput = document.getElementById('imageInput');
    //const file = imageInput.files[0];

    if (message) {
        
        input.value = '';
        $("#chatbotMessages").append("<details open><summary class='user_prompt'>"+message+"</summary></details>");
       
            $("#chatbotMessages").append("<img id='waiting' src='https://thebowlcut.com/cdn/shop/t/41/assets/loading.gif?v=157493769327766696621701744369' style='height:50px;width:50px;background:gold;border-radius:25px;' />")
            //console.log(pageText);
            callgemini(message + "; respond in HTML format, based on this page reference:" + pageText);
            
    }
}

function callgemini(prompt){
    
    $.ajax({
        url: 'https://us-central1-aihelp-382014.cloudfunctions.net/askgemini',

        type: 'POST',
        data: { "text": prompt },
        success: function(data) {
            $("#waiting").remove();
            
            data = data.replace("```html","").replaceAll("```","");
            data = convertToBold(data);
            $("#chatbotMessages").find(".user_prompt").last().parents("details").append("<div class='aiResponse' contenteditable='true'>"+data+"</div>");
        },
        error: function(xhr, status, error) {
            console.error(error);
            $("#waiting").remove();
            alert("AI didn't respond to your message. Probably due to restrictions. Ask another question");
            //$("#chatbotMessages").find(".user_prompt").last().parents("details").append("<div class='aiResponse'>AI didn't respond to your message. Probably due to restrictions. Ask another question</div>");

        }
    });
}


function convertToBold(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
}
// Function to send message to AI
function askai(prompt,callback){
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbwcfw6P9wi_rPDWOReu9Y4sIvTH5Y5cpmdtmkESEOT5X0_5wu9iVg0UxtlApXJOYNgDLQ/exec?action=askai&prompt='+prompt,
        type: 'GET',
        success: function(data) {
            $("#waiting").remove();
            if(callback){
                callback(data);
            }
            data = data.replace("```html","").replaceAll("```","");
            $("#chatbotMessages").append("<div class='aiResponse'>"+data+"</div>");
        },
        error: function(xhr, status, error) {
            console.error(error);
        }
    });
}

//Function to load from URL
function loadfromURL(){
    var url = $("#pdfURL").val();
    
        $("#urlForm").hide();
        $("#pageNext").show();
        $("#pagePrev").show();
        
    var loadingTask = pdfjsLib.getDocument(url);
        loadingTask.promise.then(function(pdf) {
            pdfDoc = pdf;
            renderPage(1);
            
        });
        
    }

async function rw_file(filename,action,data){

 url ="https://us-central1-aihelp-382014.cloudfunctions.net/rw_homework";

 filename = $("#pdfURL").val();
    if(action === "update"){
        $.ajax({
            url:"https://us-central1-aihelp-382014.cloudfunctions.net/rw_homework",
            type:'post',
            data:{'filename':filename,'data':data},
            success:function(data){
    
                console.log(data);
            }
        })
    }else{
         $.ajax({
        url:"https://us-central1-aihelp-382014.cloudfunctions.net/rw_homework",
        type:'post',
        data:{'filename':filename,'data':'read_data'},
        success:function(data){
            data = JSON.parse(data);
            data = data.replaceAll("\\n","");
            $("#chatbotMessages").html("<div id='teachers'>"+data +"</div></details>");
            $("#teachersHelp").find("details").attr('open', false);
            return data;
        }
    })
    }
   

}
function savenew() {
    var data = $(".aiResponse").last().html();
    var filename = "practice_test";
   
                
    if (filename) {
        $.ajax({
            url: "https://us-central1-aihelp-382014.cloudfunctions.net/rw_homework",
            type: 'post',
            data: {'filename': filename, 'data':JSON.stringify(data)},
            contentType: "application/json",
            success: function(response) {
                console.log(response);
                saved = rw_file(filename, "read_data","");
                return saved;
                // Uncomment the following lines if needed
                // $("#chatbotMessages").html("<div id='teachers'>" + response + "</div>");
                // $("#teachersHelp").find("details").attr('open', false);
            },
            error: function(xhr, status, error) {
                console.error("Error:", status, error);
            }
        });
    } else {
        console.log("Filename input was cancelled or empty.");
    }
}

// Initial setup on document ready
$(document).ready(function() {
    $('#chatbotInput').keydown(function(event) {

       

        if (event.which == 13) {
            sendMessage();
            event.preventDefault();
        }else{
            $("details").hide();
            prompt = ($(this).val()).toLowerCase();
            $("details").each(function(){
                if(($(this).find("summary").text()).toLowerCase().indexOf(prompt) >=0){
                    $(this).show();
                }
            })
        }
    });
    $("#fileInput").show();
    $("#pdfURL").show();
    $("#save_btn").click(function(){ rw_file("madhutemp@gmail.com",'update',JSON.stringify($("#chatbotMessages").html()))});
    $("#load_btn").click(function(){ rw_file("madhutemp@gmail.com",'read',"")});
    $("#save_new_btn").click(function(){ rw_file("practice_test",'update',JSON.stringify($(".aiResponse").last().html()))});

  
});

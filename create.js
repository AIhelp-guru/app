var pdfDoc = null, pageNum = 1, pageText ='', canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
var pages = ['1', '1', '0', '0', '1-4', '5-10', '0', '11-16','17-21'];

// Ensure the canvas is appended only once and not every time a PDF is loaded
document.getElementById('pdfViewer').appendChild(canvas);


document.getElementById('fileInput').addEventListener('change', function(event) {
  var file = event.target.files[0];
  if (file.type !== 'application/pdf') {
    console.error(file.name + ' is not a PDF file.');
    return;
  }

  var fileReader = new FileReader();
  fileReader.onload = function() {
    var typedarray = new Uint8Array(this.result);

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

function renderPage(num) {
        
    pdfDoc.getPage(num).then(function(page) {
        
        $("#pageNumber").html(num);
        $(".page").hide();
        $("#p"+num).show();

        var scale = 1.2;
        var viewport = page.getViewport({ scale: scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        var renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };
        var renderTask = page.render(renderContext);
        renderTask.promise.then(function() {
            return page.getTextContent();
        }).then(function(textContent) {
            var strings = textContent.items.map(function(item) { return item.str; });
            var textStr = strings.join(" ");  // Joins all text strings into a single string with spaces
            pageText = (textStr);  // Logs the readable text
            $("#textContent").html(pageText);
            

            $("#questionsContainer").append(textLayerDiv);
            textLayerDiv.textContent = textStr;  // Adds the processed text directly to the div
            //$(".textLayer").show();
            // If using the text layer builder from PDF.js, continue using it as needed
        });
    });
}


// Add event listeners for page navigation
document.getElementById('pageNext').addEventListener('click', function() {
  if (pageNum >= pdfDoc.numPages) {
    return;
  }
  pageNum++;
  renderPage(pageNum);
});

// Example of previous page handling (assuming there is a button with id="pagePrev")
document.getElementById('pagePrev').addEventListener('click', function() {
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  renderPage(pageNum);
});

  
 
document.getElementById('chatbotOpenButton').addEventListener('click', toggleChatbot);

function toggleChatbot() {
    $("#chatbotPanel").toggle();
    $("#gform").toggle();
    /*const chatbotPanel = document.getElementById('chatbotPanel');
    if (chatbotPanel.classList.contains('chatbot-open')) {
        chatbotPanel.classList.remove('chatbot-open');
        chatbotPanel.classList.add('chatbot-closed');
    } else {
        chatbotPanel.classList.add('chatbot-open');
        chatbotPanel.classList.remove('chatbot-closed');
    }*/
}
function getFileBase64(file, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
    reader.onerror = (error) => console.log('Error: ', error);
}

function sendMessage() {
    const input = document.getElementById('chatbotInput');
    const message = input.value.trim();
    const imageInput = document.getElementById('imageInput');
    const file = imageInput.files[0];

    if (message || file) {
        const chatbotMessages = document.getElementById('chatbotMessages');
        const msgElement = document.createElement('div');
        msgElement.textContent = message;
        chatbotMessages.appendChild(msgElement);
        input.value = '';
        imageInput.value = ''; // Reset the file input

        if (file) {
            getFileBase64(file, function(base64) {
                // Now we have the base64 of the image, send it along with the message
                $("#chatbotMessages").append("<img id='waiting' src='https://thebowlcut.com/cdn/shop/t/41/assets/loading.gif?v=157493769327766696621701744369' style='height:50px;width:50px;background:gold;border-radius:25px;' />")
                askai(message + "; Image data: " + base64.substring(0, 300) + "...;"); // Send a part of the base64 data in the log for brevity
            });
        } else {
            $("#chatbotMessages").append("<img id='waiting' src='https://thebowlcut.com/cdn/shop/t/41/assets/loading.gif?v=157493769327766696621701744369' style='height:50px;width:50px;background:gold;border-radius:25px;' />")
              
            askai(message + "; context:" + pageText);
        }
    }
}


function askai(prompt,callback){
      //prompt = "Please limit your response related to this subject / topic (in html format): ["+$("#lesson").text()+"], prompt:"+$("#prompt").val();
      //copy(prompt);
      //$("#prompt").val('');
      
     
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
        // Handle the error response
        
        console.error(error);
      }
    });
    }
$("#chatbotPanel").toggle();

$(document).ready(function() {
    $('#chatbotInput').keydown(function(event) {
        // Check if the key pressed is the Enter key
        if (event.which == 13) {
            sendMessage();
            event.preventDefault();  // Prevents the default action (form submission)
        }
    });
    //getWorksheets();
    $("#fileInput").show();
    $("#pdfURL").show();
   
});
function createQuestions(data){
    console.log(data);
}
function loadfromURL(){
var url = $("#pdfURL").val();

    //$("#fileInput").hide();
var loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(function(pdf) {
        pdfDoc = pdf;
        renderPage(1);
        $("#wkloading").hide();
    });
    getanswers();
}

function getanswers() {
    const url = "https://script.google.com/macros/s/AKfycbwTg1yb5J9dw6O4enSM8iYnteKe8LNgvVPGutLOIOKuNTH751i7nHJhV6ED1QvyoRJKmw/exec?topic=worksheets";
    
    $.get(url, function(data) {
        console.log(data);
        const filename = $("#pdfURL").val();
        $("#questionsContainer").html('');

        for (let i = 0; i < data.length; i++) {
            if (filename === data[i][0]) {
                const questionDiv = $('<div>').addClass('question');
                const questionTitle = $('<h4>').text(`Question ${data[i][1]}`);
                questionDiv.append(questionTitle);
                question_options = data[i][2].split(",");
                question_options.forEach(option => {
                    const optionLabel = $('<label>');
                    const optionInput = $('<input>', {
                        type: 'checkbox',
                        id: `page${1}-question${i}-option${option}`,
                        name: `question${i}-page${1}`
                    });

                    optionLabel.append(optionInput).append(` ${option}`);
                    questionDiv.append(optionLabel);
                });
                questionDiv.append("<button class='reveal'>Reveal</button>");
                questionDiv.append("<div class='answer'>Answer: "+data[i][3]+"</div>");
                questionDiv.append("<div class='explanation'>Explanation: "+data[i][4]+"</div>");
                $("#questionsContainer").append(questionDiv);
                $(".reveal").click(function(){
                    $(this).next().toggle();
                    $(this).next().next().toggle();
                })
            }
        }
    });
}

function getWorksheets(){
    l = location.href;
    if(l.indexOf("wksheet=") >= 0){
            w = l.substr(l.indexOf("wksheet=")+8);
    const url = "https://script.google.com/macros/s/AKfycbwTg1yb5J9dw6O4enSM8iYnteKe8LNgvVPGutLOIOKuNTH751i7nHJhV6ED1QvyoRJKmw/exec?topic=index";
    
    $.get(url, function(data) {
       for(i=0;i<data.length;i++){
            if(data[i][0] === w){
                $("#pdfURL").val(data[i][1]);
                loadfromURL();
            }

       }
        
        
    });
    }else{
        loadfromURL();
    }
}
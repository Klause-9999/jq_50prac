$(document).ready(function() {
  // Example 1: Hide a div
  $('#hideDiv1').click(function() {
    $('#div1').hide();
  });

  // Example 2: Show a div
  $('#showDiv2').click(function() {
    $('#div2').show();
  });

  // Example 3: Toggle visibility of a div
  $('#toggleDiv3').click(function() {
    $('#div3').toggle();
  });

  // Example 4: Fade out a div
  $('#fadeOutDiv4').click(function() {
    $('#div4').fadeOut();
  });

  // Example 5: Fade in a div
  $('#fadeInDiv5').click(function() {
    $('#div5').fadeIn();
  });

  // Example 6: Slide up a div
  $('#slideUpDiv6').click(function() {
    $('#div6').slideUp();
  });

  // Example 7: Slide down a div
  $('#slideDownDiv7').click(function() {
    $('#div7').slideDown();
  });

  // Example 8: Slide toggle a div
  $('#slideToggleDiv8').click(function() {
    $('#div8').slideToggle();
  });

  // Example 9: Change text of a paragraph
  $('#changeText9').click(function() {
    $('#p9').text('New text');
  });

  // Example 10: Change HTML content of a div
  $('#changeHtml10').click(function() {
    $('#div10').html('<strong>New content</strong>');
  });

  // Example 11: Append content to a div
  $('#appendDiv11').click(function() {
    $('#div11').append(' Appended content.');
  });

  // Example 12: Prepend content to a div
  $('#prependDiv12').click(function() {
    $('#div12').prepend('Prepended content. ');
  });

  // Example 13: Add a CSS class to a div
  $('#addClass13').click(function() {
    $('#div13').addClass('blue');
  });

  // Example 14: Remove a CSS class from a div
  $('#removeClass14').click(function() {
    $('#div14').removeClass('blue');
  });

  // Example 15: Toggle a CSS class
  $('#toggleClass15').click(function() {
    $('#div15').toggleClass('blue');
  });

  // Example 16: Change CSS property
  $('#changeCss16').click(function() {
    $('#div16').css('color', 'red');
  });

  // Example 17: Get input value
  $('#getValue17').click(function() {
    var value = $('#input17').val();
    $('#output17').text('Input value: ' + value);
  });

  // Example 18: Set input value
  $('#setValue18').click(function() {
    $('#input18').val('New value');
  });

  // Example 19: Disable a button
  $('#disableButton19').click(function() {
    $('#button19').prop('disabled', true);
  });

  // Example 20: Enable a button
  $('#enableButton20').click(function() {
    $('#button20').prop('disabled', false);
  });

  // Example 21: Handle click event
  $('#clickButton21').click(function() {
    $('#output21').text('Button clicked!');
  });

  // Example 22: Handle double-click event
  $('#dblClickButton22').dblclick(function() {
    $('#output22').text('Button double-clicked!');
  });

  // Example 23: Handle hover event
  $('#hoverDiv23').hover(function() {
    $('#output23').text('Hovering!');
  }, function() {
    $('#output23').text('Not hovering!');
  });

  // Example 24: Animate div width
  $('#animateDiv24').click(function() {
    $('#div24').animate({width: '200px'});
  });

  // Example 25: Animate multiple CSS properties
  $('#animateDiv25').click(function() {
    $('#div25').animate({
      width: '200px',
      height: '200px',
      opacity: 0.5
    });
  });

  // Example 26: Animate with callback
  $('#animateDiv26').click(function() {
    $('#div26').animate({width: '200px'}, function() {
      alert('Animation complete');
    });
  });

  // Example 27: Show alert on page load
  alert('Page has loaded');

  // Example 28: Append item to list
  $('#appendItem28').click(function() {
    $('#list28').append('<li>New item</li>');
  });

  // Example 29: Hide all paragraphs
  $('#hideAllParagraphs29').click(function() {
    $('p').hide();
  });

  // Example 30: Fade in and out with delay
  $('#fadeInOut30').click(function() {
    $('#div30').fadeOut(500).delay(500).fadeIn(500);
  });

  // Example 31: Get attribute value
  $('#getAttr31').click(function() {
    alert($('#image31').attr("src", "../assets/portfolio4.png"));
  });

  // Example 32: Set attribute value
  $('#setAttr32').click(function() {
    $('#image32').attr('src', '../assets/portfolio5.png');
  });

  // Example 33: Remove element
  $('#removeP33').click(function() {
    $('#p33').remove();
  });

  // Example 34: Empty an element
  $('#emptyDiv34').click(function() {
    $('#div34').empty();
  });

  // Example 35: Clone an element
  $('#cloneDiv35').click(function() {
    $('#div35').clone().insertAfter('#div35');
  });

  // Example 36: Change image source
  $('#changeSrc36').click(function() {
    $('#image36').attr('src', '../assets/portfolio6.png');
  });

  // Example 37: Check if checkbox is checked
  $('#isChecked37').click(function() {
    alert($('#checkbox37').is(':checked'));
  });

  // Example 38: Disable a form field
  $('#disableInput38').click(function() {
    $('#input38').prop('disabled', true);
  });

  // Example 39: Enable a form field
  $('#enableInput39').click(function() {
    $('#input39').prop('disabled', false);
  });

  // Example 40: Focus on an input field
  $('#focusInput40').click(function() {
    $('#input40').focus();
  });

  // Example 41: Blur an input field
  $('#blurInput41').click(function() {
    $('#input41').blur();
  });

  // Example 42: Select content in input
  $('#selectText42').click(function() {
    $('#input42').select();
  });

  // Example 43: Add content after a div
  $('#addAfterDiv43').click(function() {
    $('#div43').after('<p>Added content after</p>');
  });

  // Example 44: Add content before a div
  $('#addBeforeDiv44').click(function() {
    $('#div44').before('<p>Added content before</p>');
  });

  // Example 45: Trigger a click event
  $('#triggerClick45').click(function() {
    $('#clickMeButton45').trigger('click');
  });

  $('#clickMeButton45').click(function() {
    alert('Button clicked!');
  });

  // Example 46: Fade toggle a div
  $('#fadeToggleDiv46').click(function() {
    $('#div46').fadeToggle();
  });

  // Example 47: Detect scroll event
  $('#scrollDiv47').scroll(function() {
    $('#scrollOutput47').text('Scrolling...');
  });

  // Example 48: Load content from another file
  $('#loadContent48').click(function() {
    $('#div48').load('content.html');
  });

  // Example 49: Get the size of a div
  $('#getSize49').click(function() {
    alert('Width: ' + $('#div49').width() + ', Height: ' + $('#div49').height());
  });

  // Example 50: Scroll to a specific element
  $('#scrollToButton50').click(function() {
    $('html, body').animate({
      scrollTop: $('#scrollToP50').offset().top
    }, 1000);
  });
});

// if else condiiton
 $(document).ready(function() {
            $("#checkButton").click(function() {
                // Get the value from the input field
                let number = parseInt($("#numberInput").val());

                // Check the condition
                if (number > 10) {
                    $("#result").text("The number is greater than 10.").css("color", "green");
                } else {
                    $("#result").text("The number is 10 or less.").css("color", "red");
                }
            });
        });
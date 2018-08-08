  var socket = io()

  var username = prompt("Please enter in your username")

  socket.emit('load_req', username)

  socket.on('response', function (data) {
    confirm("Got it boy!!!!")
    var people = data.split("^")
    for (var i = people.length-2; i > 0; i--) {
    var table_row = document.createElement('TR')
    var table_data = document.createElement('TD')
    var header = document.createElement('H5')
    var image = document.createElement("IMG")
    image.style.width = "50px"
    image.style.height = "50px"
    image.classList.add("rounded-circle")
    image.src = "r.jpg"
    var span_element = document.createElement('SPAN')
    span_element.classList.add('profile-text-name')
    var span_text = document.createTextNode(people[i])
    span_element.appendChild(span_text)
    var second_line = document.createElement('P')
    var second_text = document.createTextNode('User at RedReach')
    second_line.classList.add("profile-text-description")
    second_line.appendChild(second_text)
    var third_line = document.createElement('P')
    var third_text = document.createTextNode('Thank you for your message. I really enjoyed our conversation yesterday about the possiblity of employment, so...')
    third_line.classList.add("profile-text-message")
    third_line.appendChild(third_text)
    header.appendChild(image)
    header.appendChild(span_element)
    table_data.appendChild(header)
    table_data.appendChild(second_line)
    table_data.appendChild(third_line)
    table_row.appendChild(table_data)
    table_row.name = people[i]
    document.getElementById('ma').appendChild(table_row)
    confirm("YES")
  }
  })

  function register() {
    var new_user = prompt("Enter in a username (One word)")
    socket.emit('create', new_user)
    confirm("Ping!")
  }

  function create() {
    var search = prompt("Which user would you like to message? (Be sure to spell their username correctly)")
    var packet = username+","+search+"^"
    socket.emit('new', packet)
  }

  socket.on('second', function (data) {
    var row = document.getElementById('tg').insertRow(document.getElementById('tg').rows.length);
    var cell = row.insertCell(0)
    cell.innerHTML = data
  })

    $(document).ready(function(){
      $("table").delegate("tr", "click", function() {
        $("tr").css("background-color", "inherit")
        $(this).css("background-color", "#F9F9F9")
        document.getElementById('ty').innerHTML = this.name
        socket.emit('click', this.name)
      })
    })

    function abc() {
      if (document.getElementById('xa').value.length > 0) {
        var message_object = {sender: "username", }
        socket.emit('first', document.getElementById('xa').value)
      }
    }

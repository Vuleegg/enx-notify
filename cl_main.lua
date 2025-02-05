SendAlert = function(data)

  if not data then return end 

  SendNUIMessage({
    action = "show",
    title = data.title, 
    message = data.description, 
    position = data.position,
    icon = data.icon,
    type = data.type, 
  })

end

exports('SendAlert', SendAlert)


RegisterNetEvent('notification:show')
AddEventHandler('notification:show', function(titulo,description,time,color, icon)
    SendNUIMessage({
        action = 'open',
        title = titulo,
        description = description,
        icon = icon,
        color = color,
        skew = Config.Skew,
        time = time
    })
end)


function Notification(titulo,description,time,color, icon)
    SendNUIMessage({
        action = 'open',
        title = titulo,
        description = description,
        icon = icon,
        color = color,
        skew = Config.Skew,
        time = time
    })
end




exports('Notification', Notification)

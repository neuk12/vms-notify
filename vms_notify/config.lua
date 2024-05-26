Config = {}
Config.Skew = true -- true / false

--[[

    HOW TO USE CLIENT:
    exports["vms_notify"]:Notification(
    	Title,
    	Message,
    	Show_Time, >> 1000 == 1s <<
    	HEX_Color, >> https://htmlcolorcodes.com/ <<
    	FontAwesome_Icon >> https://fontawesome.com/v4/icons/ <<
    )

    
    HOW TO USE SERVER:
    • TriggerClientEvent('notification:show', source, 'Title', 'Message', Show_Time, 'HEX_Color', 'FontAwesome_Icon')

]]

Config.TestCommand = true

if Config.TestCommand then
    RegisterCommand('test', function(source, args, raw)
    	Notification(
    		"SMS", 
    		"hello, my name is notification, nice to meet you!<br>vms* store", 
    		5000, 
    		"#e8ad2e", 
    		"fa fa-phone"
    	)
    	Citizen.Wait(1200)
    	Notification(
    		"SHOP", 
    		"hello, my name is notification, nice to meet you!<br>vms* store", 
    		5000, 
    		"#ffeb12", 
    		"fa fa-shopping-basket"
    	)
    	Citizen.Wait(1200)
    	Notification(
    		"SETTINGS", 
    		"hello, my name is notification, nice to meet you!<br>vms* store", 
    		5000, 
    		"#828282", 
    		"fa fa-cog"
    	)
    	Citizen.Wait(1200)
    	Notification(
    		"SELL", 
    		"hello, my name is notification, nice to meet you!<br>vms* store", 
    		5000, 
    		"#5bff42", 
    		"fa fa-usd"
    	)
    end, false)
end
local crosshairVisible = false
local uiVisible = false

function toggleCrosshair()
    crosshairVisible = not crosshairVisible
    SendNUIMessage({
        type = "toggleCrosshair",
        visible = crosshairVisible
    })
end

function toggleUI()
    uiVisible = not uiVisible
    SendNUIMessage({
        type = "toggleUI",
        visible = uiVisible
    })
    SetNuiFocus(uiVisible, uiVisible)
end

RegisterNUICallback("closeUI", function(data, cb)
    SendNUIMessage({
        type = "closeUI"
    })
    SetNuiFocus(false, false)
    cb("ok")
end)


Citizen.CreateThread(function() 
    while true do
        Citizen.Wait(0)
        
        if IsControlJustPressed(0, 167) then
            toggleCrosshair()
        end

        if IsControlJustPressed(0, 167) then
            toggleUI()
        end
    end
end)




RegisterNUICallback("setCrosshair", function(data, cb)
    print("Crosshair changed to: " .. data.image)
    cb("ok")
end)


RegisterNUICallback("setNight", function(data, cb)
    NetworkOverrideClockTime(1, 0, 0)
    cb("ok")
end)

RegisterNUICallback("setDay", function(data, cb) 
    NetworkOverrideClockTime(8, 0, 0)
    cb("ok")
end)

RegisterNUICallback("setRain", function(data, cb)
    SetWeatherTypeNowPersist("RAIN")
    cb("ok")
end)

RegisterNUICallback("setHalloween", function(data, cb)
    SetWeatherTypeNowPersist("halloween")
    cb("ok")
end)

RegisterNUICallback("setSnow", function(data, cb)
    SetWeatherTypeNowPersist("XMAS")
    cb("ok")
end)

RegisterNUICallback("setClear", function(data, cb)
    SetWeatherTypeNowPersist("Clear")
    cb("ok")
end)

RegisterNUICallback("setRainAndScaryAndSnow", function(data, cb)
    SetWeatherTypeNowPersist("XMAS")
    SetWeatherTypeNowPersist("RAIN")
    SetWeatherTypeNowPersist("halloween")
    cb("ok")
end)
javascript:(function()%7B%2F%2F %3D%3DUserScript%3D%3D%0A%2F%2F %40name         SenecaCheat%0A%2F%2F %40namespace    http%3A%2F%2Ftampermonkey.net%2F%0A%2F%2F %40version      0.1%0A%2F%2F %40description  Ezseneca%0A%2F%2F %40author       Qebyyy%0A%2F%2F %40match        *%3A%2F%2F*.senecalearning.com%2F*%0A%2F%2F %40grant        none%0A%2F%2F %40require      http%3A%2F%2Fcode.jquery.com%2Fjquery-latest.js%0A%2F%2F %3D%3D%2FUserScript%3D%3D%0A(function() %7B%0A%0A    'use strict'%3B%0A    (function()%7B%0A%0A        %2F%2F the minimum version of jQuery we want%0A        var v %3D '1.3.2'%3B%0A%0A        %2F%2F check prior inclusion and version%0A        if (window.jQuery %3D%3D%3D undefined %7C%7C window.jQuery.fn.jquery < v) %7B%0A            var done %3D false%3B%0A            var script %3D document.createElement('script')%3B%0A            script.src %3D 'https%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fjquery%2F' %2B v %2B '%2Fjquery.min.js'%3B%0A            script.onload %3D script.onreadystatechange %3D function()%7B%0A                if (!done %26%26 (!this.readyState %7C%7C this.readyState %3D%3D 'loaded' %7C%7C this.readyState %3D%3D 'complete')) %7B%0A                    done %3D true%3B%0A                    initMyBookmarklet()%3B%0A                %7D%0A            %7D%3B%0A            document.getElementsByTagName('head')%5B0%5D.appendChild(script)%3B%0A        %7D else %7B%0A            initMyBookmarklet()%3B%0A        %7D%0A%0A        function initMyBookmarklet() %7B%0A            (window.myBookmarklet %3D function() %7B%0A                %2F%2F your JavaScript code goes here!%0A            %7D)()%3B%0A        %7D%0A%0A    %7D)()%3B%0A    var lastStatus %3D null%0A    var newStatus %3D null%0A    alert('Made by Larry Rennoldson %5Cr%5Cn%5Cr%5Cn Currently works on%3A %5Cr%5Cn -Missing word %5Cr%5Cn -missing box %5Cr%5Cn -Toggle %5Cr%5Cn%5Cr%5Cn Feel free to drag the button')%0A    alert('--HOW TO USE-- %5Cr%5Cn%5Cr%5Cn 1. click the HAX button %5Cr%5Cn 2. this will save the answer to your clipboard %5Cr%5Cn 3. Now it will focus on the input element %5Cr%5Cn 4. Paste your answer in (ctrl%2Bv) %5Cr%5Cn enjoy!')%0A    let btn %3D document.createElement('button')%3B%0A    let hiddenBox %3D document.getElementsByClassName('BlurredWord__word BlurredWord__word--blurred')%0A    let hiddenWord %3D document.getElementsByClassName('TestedWord_word_placeholder__2xuzY')%0A    btn.innerHTML %3D 'HAX'%0A    btn.id%3D'Ezbutton'%0A    btn.style.position %3D 'fixed'%0A    btn.style.width%3D'60px'%0A    btn.style.height%3D'48px'%0A    btn.style.top %3D '94%25'%0A    btn.style.left %3D '80%25'%0A    btn.style.backgroundColor %3D '%235b1de1'%0A    btn.style.borderRadius %3D '4px'%0A    btn.style.borderColor %3D 'transparent'%0A    btn.style.color %3D 'white'%0A    btn.style.font %3D 'sans-serif'%0A    btn.style.cursor %3D 'pointer'%0A    btn.style.transitionProperty %3D 'border-radius'%3B%0A    btn.style.transitionDuration %3D '0.25s'%3B%0A%0A%0A%0A    btn.onmouseenter %3D function hver()%7B%0A        btn.style.backgroundColor %3D '%234917b4'%0A        btn.style.borderRadius %3D '10px'%0A%0A    %7D%0A    btn.onmouseleave %3D function lve()%7B%0A        btn.style.backgroundColor %3D '%235b1de1'%0A        btn.style.height%3D'48px'%0A        btn.style.borderRadius %3D '4px'%0A%0A    %7D%0A%0A    function next()%7B%0A        var continueButton %3D document.getElementsByClassName('Button_button__1Q4K4 PrimaryButton_primaryButton__14UD2 PrimaryButtonTypes_medium__3jJgQ ControlBarButton_button__2PkIJ')%0A        continueButton%5B0%5D.click()%0A    %7D%0A    function input(word)%7B%0A        (async () %3D> %7B%0A            await navigator.clipboard.writeText(word)%3B%0A        %7D)()%3B%0A        var x %3D null%0A        try%7B%0A            x %3D document.getElementsByClassName('List__WordInput__input')%0A            x%5B0%5D.focus()%0A%0A        %7D%0A        catch%7B%0A            x %3D document.getElementsByClassName('Input_input__3CI_c')%0A            x%5B0%5D.focus()%0A%0A        %7D%0A    %7D%0A    function getStatus() %7B%0A        var stus %3D document.getElementsByClassName('Toggles__wrapper')%0A        stus %3D stus%5B0%5D.style.backgroundImage.split('%2C ')%0A        return (stus)%0A    %7D%0A%0A    function getSliderAnswer(button%2C nextButton)%7B%0A        if (lastStatus > newStatus)%7B%0A            %2F%2Fbad%0A            button.click()%0A        %7D%0A        else%7B%0A            lastStatus %3D getStatus()%0A            nextButton.click()%0A            newStatus %3D getStatus()%0A        %7D%0A%0A    %7D%0A    function sliders() %7B%0A        var test %3D document.getElementsByClassName('Toggles__wrapper')%5B0%5D%0A        if (typeof test %3D%3D%3D 'undefined') %7B%0A            return('%23f5454c')%0A        %7D%0A        let parentToggle %3D document.getElementsByClassName('Toggles__single__toggle Toggles__single__toggle-active')%0A        var lastStatus %3D getStatus()%0A        parentToggle%5B0%5D.click()%0A        var newStatus %3D getStatus()%0A        let amount %3D parentToggle.length%0A        let i %3D 0%0A        while ( i < amount) %7B%0A            try%7B%0A                getSliderAnswer(parentToggle%5Bi%5D%2C parentToggle%5Bi%2B1%5D)%0A            %7D%0A            catch%7B%0A                return('%2325b999')%0A            %7D%0A%0A            i%2B%2B%3B%0A        %7D%0A%0A        %2F%2Frgb(250%2C 203%2C 97)--One off%0A        %2F%2Frgb(250%2C 183%2C 97)%0A    %7D%0A    function findmissingWord(missingWord) %7B%0A%0A        if (typeof(missingWord%5B0%5D) %3D%3D 'undefined')%0A        %7B%0A%0A            return('%23f5454c')%2F%2Fred%0A%0A%0A        %7D%0A        try%0A        %7B%0A            var foundWord %3D missingWord%5B0%5D.children%0A            foundWord %3D missingWord%5B0%5D.textContent%0A            missingWord%5B0%5D.className %3D 'none'%0A        %7D%0A        catch%0A        %7B%0A            missingWord%5B0%5D.className %3D 'none'%0A        %7D%0A        input(foundWord)%0A        return('%2325b999')%0A%0A    %7D%0A    btn.onclick %3D function btnclick() %7B%0A        var x %3D null%0A        x %3D findmissingWord(hiddenBox)%0A        if (x %3D%3D '%23f5454c')%7B%0A            x %3D findmissingWord(hiddenWord)%0A            if (x %3D%3D '%23f5454c')%7B%0A                x %3D sliders()%0A                if (x %3D%3D '%23f5454c')%7B%0A                    next()%0A                %7D%0A%0A            %7D%0A%0A        %7D%0A%0A%0A        btn.style.backgroundColor %3D x%0A%0A%0A    %7D%0A    document.body.appendChild(btn)%3B%0A    dragElement(btn)%3B%0A%0A    function dragElement(elmnt) %7B%0A        var pos1 %3D 0%2C pos2 %3D 0%2C pos3 %3D 0%2C pos4 %3D 0%3B%0A        if (document.getElementById(elmnt.id %2B 'header')) %7B%0A            %2F%2F if present%2C the header is where you move the DIV from%3A%0A            document.getElementById(elmnt.id %2B 'header').onmousedown %3D dragMouseDown%3B%0A        %7D else %7B%0A            %2F%2F otherwise%2C move the DIV from anywhere inside the DIV%3A%0A            elmnt.onmousedown %3D dragMouseDown%3B%0A        %7D%0A%0A        function dragMouseDown(e) %7B%0A            e %3D e %7C%7C window.event%3B%0A            e.preventDefault()%3B%0A            %2F%2F get the mouse cursor position at startup%3A%0A            pos3 %3D e.clientX%3B%0A            pos4 %3D e.clientY%3B%0A            document.onmouseup %3D closeDragElement%3B%0A            %2F%2F call a function whenever the cursor moves%3A%0A            document.onmousemove %3D elementDrag%3B%0A        %7D%0A%0A        function elementDrag(e) %7B%0A            e %3D e %7C%7C window.event%3B%0A            e.preventDefault()%3B%0A            %2F%2F calculate the new cursor position%3A%0A            pos1 %3D pos3 - e.clientX%3B%0A            pos2 %3D pos4 - e.clientY%3B%0A            pos3 %3D e.clientX%3B%0A            pos4 %3D e.clientY%3B%0A            %2F%2F set the element's new position%3A%0A            elmnt.style.top %3D (elmnt.offsetTop - pos2) %2B 'px'%3B%0A            elmnt.style.left %3D (elmnt.offsetLeft - pos1) %2B 'px'%3B%0A        %7D%0A%0A        function closeDragElement() %7B%0A            %2F%2F stop moving when mouse button is released%3A%0A            document.onmouseup %3D null%3B%0A            document.onmousemove %3D null%3B%0A        %7D%0A    %7D%0A%0A%0A%7D)()%3B%7D)()

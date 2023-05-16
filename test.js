(function() {
    const autoReplyMessage = "Salut, o să îți răspund cât de repede pot! Momentan nu sunt online.";
    const ONE_SECOND = 1000;
    const InputEvent = window.Event || window.InputEvent;

    const eventFire = (el, etype) => {
        var evt = document.createEvent('MouseEvents');
        evt.initEvent(etype, true, false);
        el.dispatchEvent(evt);
    };

    const replyToMessage = () => {
        let messageBox = document.querySelectorAll("[contenteditable='true']")[1];
        eventFire(messageBox, 'mouseover');
        messageBox.innerHTML = autoReplyMessage;
        eventFire(messageBox, 'input');
        eventFire(document.querySelector('span[data-icon="send"]'), 'click');
    };

    const newMessageCheck = () => {
        let unread = document.querySelectorAll('.P6z4j');
        if(unread.length > 0){
            eventFire(unread[0], 'mousedown');
            setTimeout(replyToMessage, ONE_SECOND);
        }
    };

    setInterval(newMessageCheck, ONE_SECOND);
})();

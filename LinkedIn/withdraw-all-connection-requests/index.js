// ==UserScript==
// @name         LinkedIn Withdraw All Connection Requests
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Withdraw all LinkedIn connection requests with a single click
// @author       @MortezaNedaei
// @match        https://www.linkedin.com/mynetwork/invitation-manager/sent/?invitationType=CONNECTION
// @icon         https://www.google.com/s2/favicons?sz=64&domain=linkedin.com
// @grant        none
// ==/UserScript==

// How To use:
// Open https://www.linkedin.com/mynetwork/invitation-manager/sent/?invitationType=CONNECTION
// Then Click On Withdraw All

(function() {
    'use strict';

    function getHeaderContainer () {
        return document.querySelector(".mn-invitation-manager__header")
    }

    /**
     * create a new button for Withdraw All  with LinkedIn button style
     * @returns {HTMLButtonElement}
     */
    function createWithdrawAllButton () {
        const headerContainer = getHeaderContainer();
        const withdrawButton= document.createElement('button');
        headerContainer.appendChild(withdrawButton);
        withdrawButton.innerText= 'Withdraw All';
        withdrawButton.classList.add('artdeco-button__text' );
        withdrawButton.classList.add('artdeco-button');
        withdrawButton.addEventListener("click", withdrawAll);
        return withdrawButton;
    }

    /**
     * withdraws items in an interval
     */
    function withdrawAll () {
        window.setInterval(() => {
            // click on withdraw button
            document.querySelector(".invitation-card__action-btn").click()
            // click on confirmation dialog
            document.querySelector("button.artdeco-button--primary").click()
        }, 500);
    }

    createWithdrawAllButton();

})();

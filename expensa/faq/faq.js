var faqs = [{
        "q": "What is Expensa ? What is the purpose of this app ?",
        "a": "Expensa is free and ad-free, a simple mobile app allows you to record your expense and attach receipt to it. It helps you to keep track of your all personal expenses."
    },
    {
        "q": "How does Expensa app store your data ? ",
        "a": "Expensa stores your expenses data on your mobile device. It doesn't store your data on any server."
    },
    {
        "q": "How is your expenses stored in google drive after backup ?",
        "a": "They are stored in zip file inside folder Expensa_backup under your google drive. As of now, backup files are not encrypted."
    },
    {
        "q": "Why to use Expensa if I am tracking my expenses in excel ?",
        "a": "Expensa helps you to record your expense with receipt instantly. It allows you to scan your receipt. Please see many more Expensa features."
    },
    {
        "q": "How is this app different than other expense tracking app ? ",
        "a": "This app is free and ad-free app which stores data on your local device. This app does not store your data on any server."
    },

    {
        "q": "Can I upload pdf as receipt ?",
        "a": "As of now, we support only image file. You can take screenshot of your pdf file and attach screenshot as attachment."
    },
    {
        "q": "How can I enable auto backup to Google Drive ? ",
        "a": "Right now, we allow only manual backup/restore. Auto backup feature is coming soon."
    },
    {
        "q": "How do I get my expenses data back if I lose my mobile device ? ",
        "a": "You can backup your expenses data to your Google Drive account. You can restore them when you re-install the app Expensa."
    },
    {
        "q": "Can I use this app on my iOS device ?",
        "a": " We have only android version as of now. iOS may come in future."
    },
    {
        "q": "Can I export my expenses data ?",
        "a": "Yes, you can export your expenses data in PDF or TSV format. You can filter data based on year/month before exporting them. You can share the exported file on Whatsapp/Email"
    },
    {
        "q": "How can I logout from this app ?",
        "a": "You can not logout from this app. You can uninstall the app which will delete all your expense data from your mobile. You can restore them from you Google Drive account after re-install."
    },
    {
        "q": "How do I login to this app ?",
        "a": "You don't need to login to this app, we have removed login process to make experience smoother."
    },
    {
        "q": "How can I send feedback, suggestions, or queries ?",
        "a": "Please send email to 'rajeevkjayaswal@gmail.com'"
    },
    {
        "q": "Do I need to buy or subscribe to have ad-free experience for Expensa app",
        "a": "Nope, this app is free with ad-free experience."
    },
    {
        "q": "How can I change currency format ?",
        "a": "You can change currency format from Setting -> Currency. Choose the one from the list. You need to restart the app to reflect the changes."
    },
    {
        "q": "How can I change date format used in the app ?",
        "a": "You can change date format from Setting -> Date format. Choose the one from the list. You need to restart the app to reflect the changes."
    },
    {
        "q": "How to check privacy policy and terms of this app ?",
        "a": "You can view them by going to Setting -> Help -> Privacy Policy."
    },
    {
        "q": "How can I disable notification to this app ?",
        "a": "You can disable all notification by turning off the notification toggle present under Settings -> My Profile -> Notifications."
    },
    {
        "q": "How to check version of the Expensa app ?",
        "a": "You can visit Settings -> Help, For example: Version 20.12.22"
    },
    {
        "q": "Will this app work without internet connection too ? Will offline mode work for this app ?",
        "a": "You don't need internet connection to use this app. If you want to backup/restore your expenses data from Google drive, then internet connection is required."
    },
    {
        "q": "Can I backup my all expenses data without attachments ?",
        "a": " Yes, you can turn off include attachment on backup screen to exclude receipts."
    },
    {
        "q": "Can I disable Google Drive backup ?",
        "a": "Yes, you can turn off backup from Setting -> Backup and Restore screen."
    },
    {
        "q": "How can I search for particular expense ?",
        "a": "You can use search-bar present on top to home screen. It searches with keywords present in expense name and notes."
    },

    {
        "q": "Can I scan my receipt using Expensa app ? ",
        "a": "yes, you can use your camera from expense app to scan receipt."
    },
    {
        "q": "Can I see my expenses in charts or graph ? ",
        "a": "yes, you can view different format of charts under chart bar."
    },
    {
        "q": "I don't have much memory on my phone, how can I use Expensa ? ",
        "a": "Expensa consumes very less memory to store your expenses. However if you attach receipt, it will consume more memory. You can avoid attachment if you have limited memory."
    },
    {
        "q": "How can I clear my cache for this app ?",
        "a": "You can go to Setting -> Clear Junks option."
    }
];

window.addEventListener('DOMContentLoaded', event => {

    var accordion = document.getElementById("accordion");
    for (var i = 0; i < faqs.length; i++) {
        var q = faqs[i].q;
        var a = faqs[i].a;
        
    accordion.innerHTML += 
            `
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#q` + i + `"
                                aria-expanded="false" aria-controls="collapseOne">` + q + `
                                
                            </button>
                        </h5>
                    </div>
                    <div id="q` + i + `" class="collapse hide" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">` + a + `
                        </div>
                    </div>
                </div>
            `;
    }
});
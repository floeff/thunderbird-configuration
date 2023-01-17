/* Set English reply and forward headers */
user_pref("mailnews.reply_header_type", 3);
user_pref("mailnews.reply_header_authorwroteondate","#1 wrote on #2 at #3:");
user_pref("mailnews.reply_header_authorwrotesingle","#1 wrote:");
user_pref("mailnews.reply_header_ondateauthorwrote","On #2 at #3 #1 wrote:");
user_pref("mailnews.reply_header_originalmessage","-------- Original Message --------");
user_pref("mailnews.forward_header_originalmessage","-------- Forwarded Message --------");

/* Disable progress window when sending message */
user_pref("mailnews.show_send_progress", false);

/* Display Organization header when reading message */
user_pref("mailnews.headers.showOrganization", true);

/* Sort all folders by thread and date automatically */
user_pref("mailnews.default_sort_order", 2);
user_pref("mailnews.default_sort_type", 18);
user_pref("mailnews.default_view_flags", 1);

/* Check all IMAP folders regardless of subscription */
user_pref("mail.server.default.check_all_folders_for_new", true);

/* Always show quota in main window */
user_pref("mail.quota.mainwindow_threshold.show", 0);

/* Do not hint at possible encryption */
user_pref("mail.openpgp.remind_encryption_possible", false);

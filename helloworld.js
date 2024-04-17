Java.perform(function () {
    // Get a reference to the AlertDialog class
    var AlertDialog = Java.use('android.app.AlertDialog');

    // Get a reference to the current application context
    var currentApplication = Java.use('android.app.ActivityThread').currentApplication();
    var context = currentApplication.getApplicationContext();

    // Create a new AlertDialog builder
    var alertDialogBuilder = AlertDialog.Builder.$new(context);

    // Set the title and message for the AlertDialog
    alertDialogBuilder.setTitle("Hello");
    alertDialogBuilder.setMessage("Hello World");

    // Create the AlertDialog
    var alertDialog = alertDialogBuilder.create();

    // Set a click listener to dismiss the dialog when clicked
    alertDialog.setButton(AlertDialog.BUTTON_POSITIVE, "OK", {
        onClick: function(dialog, which) {
            dialog.dismiss();
        }
    });

    // Show the AlertDialog
    alertDialog.show();
});

interface Resources {
  translation: {
    Appearance: {
      Description: "Customize the appearance of the app. Automatically switch between day and night themes.";
      Font: {
        Description: "Set the font you want to use in the app.";
      };
      Locale: {
        Description: "Select the locale for the app.";
      };
      Theme: {
        Description: "Select the theme for the app.";
        Validation: "Please select a theme first.";
      };
    };
    Auth: {
      ForgotPassword: {
        Description: "Enter your registered email and we will send you a link to reset your password.";
        Title: "Forgot Password";
      };
      GoSignUp: "Go Sign Up";
      NotHaveAccount: "Don't have an account?";
    };
    Command: {
      NoResultsFound: "No results found...";
      Placeholder: "Type a command or search...";
    };
    Email: {
      Sending: "Sending email...";
      Validation: {
        Empty: "Please enter your email.";
        Invalid: "Invalid email address.";
      };
    };
    GeneralError: {
      Apologize: "We apologize for the inconvenience. Please try again later.";
      Wrong: "Oops! Something went wrong!";
    };
    NotFound: {
      Description: "It seems like the page you're looking for does not exist or might have been removed.";
      Title: "Oops! Page Not Found!";
    };
    Profile: {
      Bio: {
        Description: "You can @mention other users and organizations to link to them.";
        Placeholder: "Tell us a little bit about yourself";
        Validation: {
          Max: "Too long: expected string to have <= 120 characters";
        };
      };
      Description: "This is how others will see you on the site.";
      Email: {
        Description: "You can manage verified email addresses in your email settings.";
        GoEmailSetting: "Go to email setting";
        Placeholder: "Select a verified email to display";
        Validation: {
          Empty: "Please select an email to display.";
        };
      };
      Username: {
        Description: "This is your public display name. You can only change this once every 30 days.";
        Placeholder: "Enter your username";
        Validation: {
          Empty: "Please enter your username.";
          Max: "Username must not be longer than 30 characters.";
          Min: "Username must be at least 2 characters.";
        };
      };
    };
    Settings: {
      Description: "Manage your account settings and set app preferences.";
    };
    Sidebar: {
      Appearance: "Appearance";
      Apps: "Apps";
      Auth: "Auth";
      Dashboard: "Dashboard";
      Errors: "Errors";
      Forbidden: "Forbidden";
      ForgotPassword: "Forgot Password";
      General: "General";
      HelpCenter: "HelpCenter";
      InternalServerError: "Internal Server Error";
      MaintenanceError: "Maintenance Error";
      NotFound: "Not Found";
      OTP: "OTP";
      Other: "Other";
      Pages: "Pages";
      Profile: "Profile";
      SecuredByClerk: "Secured by Clerk";
      Settings: "Settings";
      SignIn: "Sign In";
      SignIn2Col: "Sign In (2Col)";
      SignUp: "Sign Up";
      Tasks: "Tasks";
      Unauthorized: "Unauthorized";
      UserManagement: "User Management";
      Users: "Users";
    };
    SignOut: {
      Description: "Are you sure you want to sign out? You will need to sign in again to access your account.";
    };
    UI: {
      Account: "Account";
      Appearance: "Appearance";
      BackToHome: "Back to Home";
      Bio: "Bio";
      Cancel: "Cancel";
      Command: "Command";
      Confirm: "Confirm";
      Continue: "Continue";
      Dark: "Dark";
      Devices: "Devices";
      Email: "Email";
      Font: "Font";
      GoBack: "Go Back";
      Language: "Language";
      Light: "Light";
      Locale: "Locale";
      Login: "Login";
      Notifications: "Notifications";
      Overview: "Overview";
      Products: "Products";
      Profile: "Profile";
      Projects: "Projects";
      Search: "Search";
      Settings: "Settings";
      SignUp: "Sign Up";
      SingOut: "Sign Out";
      System: "System";
      Theme: "Theme";
      ToggleSidebar: "Toggle Sidebar";
      ToggleTheme: "Toggle Theme";
      URLs: "URLs";
      Update: "Update";
      UpdateSuccessful: "Update successful!";
      UpgradeToPro: "Upgrade to Pro";
      Username: "Username";
    };
  };
}

export default Resources;

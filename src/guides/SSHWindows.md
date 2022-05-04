# Windows

## 1. Remote Log In

### 1.1. Generating a keypair

- Download and run the PuTTY installer from here. Most users will want the "64-bit x86" option.
- Open PuTTYgen.
- In the "Parameters" subsection, choose the "RSA" option (not the "SSH-1 (RSA)" option).
- Generate the key pair by pressing "Generate" and follow the instructions.
- Enter a secure passphrase in the "Key passphrase" fields. Do not make your key passphrase the same as your Brown password.
- Save your public key as "csfs.pub" in your puttykeys folder.
- Save your private key as "csfs.ppk" in your puttykeys folder.
- Upload your public key (not your private key) at your ssh keys page.
- Wait a few minutes for the gateway to recognize your public key.

### 1.2. Setting up a PuTTY session

- Open PuTTY.
- In the "Host Name (or IP address)" box, enter "ssh.cs.brown.edu".
- In the "Connection type" subsection, make sure "SSH" is selected.
- Select "X11" in the "SSH" section of the Category menu. Check the "Enable X11 forwarding" box.
- Set your putty private key by selecting the Connection-SSH-Auth section. Click on the Browse button under "Private key file for authentication:" to select your putty private key file.
- Now select "Session" in the "Category" menu to return to the main screen. Type "Brown CS" in the "Saved Sessions" box, and press the "Save" button to store these settings.
- From now on, when you open PuTTY, you should see the "Brown CS" label in the "Saved Sessions" section. Double click on this label.
- PuTTY will ask you to log in. Use your CS login and the passphrase you selected above.
- If this is your first time logging in, or you recently changed your University password, you will additionally prompted for your Brown username and password followed by Duo 2-factor auth.
- Subsequent logins will skip this step.

### 1.3. Setting up Pageant (optional)

- This will cache your private key and key passphrase so that you don't have to enter your passphrase every time you ssh. Note that while this is optional for normal ssh, it's required for FastX.
- Run Pageant (it should have been installed at the same time as PuTTY).
- Right-click on the Pageant icon in the taskbar.
- Select "Add SSH key" and browse to where your private key is stored.
- Enter your key passphrase when prompted.
- Next time you run PuTTY, you shouldn't need to enter your passphrase. 2. X Forwarding
- To run programs with GUIs written according to the X display protocol, you either need to use FastX or install an X server.​ For the latter, we recommend the Windows X server known as MobaXTerm.

### 2.1. Setting Up FastX

### 2.2. Setting Up MobaXterm

- Download the Portable edition of MobaXterm https://mobaxterm.mobatek.net/download-home-edition.html
- Extract the zipfile to your Desktop and double click the Mobaxterm program to run it
- You should now see the main menu for MobaXterm. Click on the "Session" button on the top right
- It should display a screen prompting for you to "Choose as session type...". Click on SSH on the top right
- In the Remote host box enter: ssh.cs.brown.edu
- Check the Specify username box and enter your cslogin
- Click OK at the bottom of the window and you should be taken to a terminal screen
- Enter your passphrase when prompted and click Yes if you'd like for your passphrase to be saved
- You should then be logged into a CS department machine. To run a program with graphics, run it as you normally would from the command line. After a brief delay another window should open with the graphical output of your program.
- To close your session, either simply end the terminal session or exit MobaXterm 3. File Transfer using WinSCP
- 3.1. Setting Up WinSCP
- Download and open the WinSCP installer here.
- At the "Select Components" screen, uncheck everything except "WinSCP application".
- At the "Select Additional Tasks" screen, make sure you leave "Register to handle sftp:// and scp:// addresses" checked.
- Install.
- Open WinSCP.
- In the "Host name" box, type "ssh.cs.brown.edu". In the "User name" box, enter your CS login. Make sure the File protocol subsection is SFTP.
- 3.2. Using WinSCP
- From now on, when you open WinSCP, you should see a "yourlogin@ssh.cs.brown.edu" label in the "Stored Sessions" section. Double-click on this label.
- Enter your passphrase.
- A WinSCP interface should open. The left side of the screen represents your computer, the right side represents the CS filesystem. You can navigate both, and drag and drop files between them as necessary.

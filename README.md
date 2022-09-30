# Module 11 Challenge Project - Note Taker application using Express.js
This program is a Full stack application, meaning it has a fully functional front end and a fully functional back end. This application is called "Note Taker", it can be used to write and save notes. When the application starts, threr's a button in the middle of the page called "Get Started". Clicking this button will do just that, it'll get you started on taking notes from another page. You'll see that along the left hand side of the page is a list of all notes that have been saved. On the right hand side is where you will enter notes, starting with up top where it should read "Note Title". Here is where you enter the title of your note. On the next line you see "Note Text", you can tab to it after entering your title or simply click the cursor into the field. After entering the note, up top, on the right side you will see a save disk, click the disk and your note will be saved and added to the list on the left. Clicking the plus sign on top will clear the note taking area of any entries and place the cursor in the "Note Title" area for you to start entering a new note.


## Application Featuers broken down.
* Initial Page
    - Button "Get Started" - Will launch the Note Taking page.

* Entering Notes Page
    - Title secion of the application is separated by a greenish color.
        - "Note Taker" is a link, when clicked, it will take you back to the initial page.
        - "Plus Sign" is a clickable icon that will clear any notes and place focus on "Note Title"
        - "Save Disk" will save the notes you've filled in and add it to the list on the left.
    
    - Main section of the page.
        - Column to the left is where your notes will be saved and kept in a list format.
        - Column to the right is where you enter your notes.

All data saved is kept in JSON format for easy retrieval. Everytime the appliocation re-opens, your saved notes will re-appear on the left hand side. Unfortunatly I ran short on time and wasn't able to get the DELETE feature working. 


### Special Notes:
* I worked hard to separate the modules and maintain a structured design. Her's how I laid out the data directories for proper flow and functionality.
    * db
        - contains notes.json file for storing notes.
    
    * helpers
        - contains utility javascript modules.
    
    * node_module - Not included in repo.

    * notes    
        - Javascript for note features.

    * public
        - assets - css - js : Front End HTML, StyleSheets and Javascript.

    * routes
        - Backend javascript

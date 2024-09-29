# Task #6

Web-application (use the stack of your group).

The application is a "collaborative presentation software" for everyone.

No registration or authentication, all users have immediate access to the "presentations" list (the user only provides arbitrary nick-name to enter).

Each user can create presentation or join existing presentation. Presentation creator can see the list of the connected users (let's say on the right) and can make any other users "Editors" (or switch them back to "Viewers").

Viewer can only view the collaborative work.

Several editors can draw on the same or different slides
(only creator can add new slides or remove them). When somebody edit something, it appears to other users "immediately" (there may be a slight delay, you can either poll the server or preferably use websockets).

Everything edited on the slides is stored "forever" (if user joins this presentation later, he/she sees everything what was created before).

Slide area should fill the whole window (except the top tool panel, left slides panel and right users panel) and scale/scroll adequately.

At least, add possiblity to add _editable_, _movable_ text blocks with markdown formatting.

Optional requirement (each will increase the grade):

- Ability to erase previously draw elements.
- Multiple additional drawing tools ("rectangle", "circle", "arrow" etc.) with colors.
- Zoom in/out functionality.
- Preview thumbnail image of the first slide in the presentation list.
- Export to PDF option.

> **_The most important part is how accurate will your app looks — does it look like a ready-to-market solution or like a student-practice?_**

## Next

Please, note that in the Task #6 the main requirement is to make your application "life-like". Implementation of the very basic, bare minimum requirements will be accepted, but won't get any good grade. Let's try to think what is assumed, what's expected from such kind of application:

1. Presentation gallery should support some kind of paging, be filterable and searchable. Probably, it's a good idea to have two views: "table" (the default one) and "tiles".
1. Implement some kind of "tool panel" with **different** tools with contextual **settings** as well as Undo/Redo functionality.
1. It's a very good idea to have a way to see some kind of status ("edits current slide" / "last edited by ... at ..."). It's also a great idea to have some kind of statistics (number of slides, text objects, memory footprint or something).
1. Elements should be editable (move, rotate, scale, z-index operations, delete).
1. It's necessary to support slide auto-numbering, reordering by drag-n-drop and renaming.
   Without such capabilities it's middle-shool project "I know WebSockets", not an application.

P.S. Yes, "it was not in the requirements". Well, that's life. It's so called "assumptions" – the client expect professionally built user-friendly app. The only constant thing is change.

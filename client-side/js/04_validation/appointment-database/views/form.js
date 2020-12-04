function getForm(milestone) {
  if (milestone == undefined) {
    milestone = {
      id: "",
      project: "",
      task: "",
      responsible_person: "",
      email: "",
      notes: "",
    };
  }

  // define different header(s)
  let milestoneHeader = "Add new milestone";

  // check if milestone alredy exists and fill milestone object
  if (milestone.id) {
    milestoneHeader = "Edit note";
  }

  // build form within javascript
  const form = `<!DOCTYPE html>
<html>
    <head>
        <title>${milestoneHeader}</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="/styles/style.css" />
    </head>
    <body>
        <h1>${milestoneHeader}</h1>
        <form action="/save" method="POST">
            <input type="hidden" id="id" name="id" value="${milestone.id}" />
            
            <div>
                <label for="project">Project:</label><br>
                <input type="text" id="project" name="project">${milestone.project}
            </div>

            <div>
                <label for="task">Task:</label><br>
                <input type="text" id="task" name="task">${milestone.task}
            </div>

            <div>
            <label for="verantwortlicher">Responsible person:</label><br>
            <input type="text" id="responsible_person" name="responsible_person">${milestone.responsible_person}
            </div>
            
            <div>
            <label for="mail">E-Mail:</label><br>
            <input type="text" id="email" name="email">${milestone.email}
            </div>

            <div>
            <label for="notes">Notes:</label><br>
            <textarea id="notes" name="notes">${milestone.notes}</textarea>
            </div>

            <button type="submit">Save</button>
            
        </form>
    </body>
</html>`;
  return form;
}

module.exports = getForm;

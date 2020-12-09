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
                <label for="project">Project:*</label><br>
                <input type="text" id="project" name="project" placeholder="Add the name of the project." required>${milestone.project}
            </div>

            <div>
                <label for="task">Task:*</label><br>
                <input type="text" id="task" name="task" placeholder="Add the name of the task." required>${milestone.task}
            </div>

            <div>
            <label for="verantwortlicher">Responsible person:*</label><br>
            <input type="text" id="responsible_person" name="responsible_person" placeholder="Use Sophie, Norbert or Lisa"required pattern="[Ss]ophie|[Nn]orbert|[Ll]isa">${milestone.responsible_person}
            </div>
            
            <div>
            <label for="mail">E-Mail:*</label><br>
            <input type="text" id="email" name="email" placeholder="max.mustermann@gmail.at" required pattern="^[a-zA-Z0-9_](\.?[a-zA-Z0-9_-]){0,}@[a-zA-Z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$">${milestone.email}
            </div>

            <div>
            <label for="notes">Notes:*</label><br>
            <textarea id="notes" name="notes" placeholder="Add a note with at least 6 characters." required minlength="6" maxlength="250">${milestone.notes}</textarea>
            </div>

            <button type="submit">Save</button>
            
        </form>
    </body>
</html>`;
  return form;
}

module.exports = getForm;

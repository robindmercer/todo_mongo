import Task from "../model/Task";

export const renderTasks = async (req, res) => {
  try {
    const tasks = await Task.find().lean();
    res.render("index", {
      tasks,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};

export const createTask = async (req, res, next) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    return res.render("error", { errorMessage: error.message });
  }
};

export const taskToggleDone = async (req, res, next) => {
  let { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};

export const editTask = async (req, res, next) => {
  const { id } = req.params;
  await Task.updateOne({ _id: id }, req.body);
  res.redirect("/");
};

export const renderTaskEdit = async (req, res, next) => {
  const task = await Task.findById(req.params.id).lean();
  console.log('Edit Task: ', task);
  res.render("edit", { task });
};

export const renderTaskFind = async (req, res, next) => {
  const title = req.query.title
  var query = { title:title};
  console.log('req.params.id: ', title);
  const task = await Task.find(query);
  console.log('Find Task: ', task);
  res.render("edit", { task });
};

export const deleteTask = async (req, res, next) => {
  let { id } = req.params;
  await Task.deleteOne({ _id: id });
  res.redirect("/");
};

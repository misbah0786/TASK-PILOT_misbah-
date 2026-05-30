import "../App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function Dashboard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stage, setStage] = useState("Todo");

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async () => {
    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/tasks",
        {
          title,
          description,
          stage,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      setDescription("");
      setStage("Todo");

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await API.delete(`/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTaskStatus = async (id, newStage) => {
    try {
      const token = localStorage.getItem("token");

      await API.put(
        `/tasks/${id}`,
        {
          stage: newStage,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

 useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/");
    return;
  }

  fetchTasks();
}, []);
  const todoTasks = tasks.filter(
    (task) => task.stage === "Todo"
  );
  

  const progressTasks = tasks.filter(
    (task) => task.stage === "In Progress"
  );

  const doneTasks = tasks.filter(
    (task) => task.stage === "Done"
  );

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Task Manager Dashboard</h1>

        <button
          className="delete-btn"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <div className="form-container">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <select
          value={stage}
          onChange={(e) =>
            setStage(e.target.value)
          }
        >
          <option value="Todo">Todo</option>
          <option value="In Progress">
            In Progress
          </option>
          <option value="Done">Done</option>
        </select>

        <button
          onClick={createTask}
          className="add-btn"
        >
          Add Task
        </button>
      </div>

      <div className="board">

        <div className="column">
          <h2>
            Todo ({todoTasks.length})
          </h2>

          {todoTasks.map((task) => (
            <div
              key={task._id}
              className="task-card"
            >
              <p>
                <strong>{task.title}</strong>
              </p>

              <p>{task.description}</p>

              <div className="task-buttons">
                <button
                  className="move-btn"
                  onClick={() =>
                    updateTaskStatus(
                      task._id,
                      "In Progress"
                    )
                  }
                >
                  Move →
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteTask(task._id)
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="column">
          <h2>
            In Progress (
            {progressTasks.length})
          </h2>

          {progressTasks.map((task) => (
            <div
              key={task._id}
              className="task-card"
            >
              <p>
                <strong>{task.title}</strong>
              </p>

              <p>{task.description}</p>

              <div className="task-buttons">
                <button
                  className="complete-btn"
                  onClick={() =>
                    updateTaskStatus(
                      task._id,
                      "Done"
                    )
                  }
                >
                  Complete
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteTask(task._id)
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="column">
          <h2>
            Done ({doneTasks.length})
          </h2>

          {doneTasks.map((task) => (
            <div
              key={task._id}
              className="task-card"
            >
              <p>
                <strong>{task.title}</strong>
              </p>

              <p>{task.description}</p>

              <div className="task-buttons">
                <button
                  className="reset-btn"
                  onClick={() =>
                    updateTaskStatus(
                      task._id,
                      "Todo"
                    )
                  }
                >
                  Reset
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteTask(task._id)
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
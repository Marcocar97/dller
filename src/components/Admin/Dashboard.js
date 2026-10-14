import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import Timeline from "react-calendar-timeline";
import dayjs from "dayjs";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [showProjectModal, setShowProjectModal] = useState(false);

  const [project_code, setProjectCode] = useState("");
  const [description, setDescription] = useState("");
  const [client_id, setClientId] = useState("");
  const [start_date, setStartDate] = useState("");
  const [due_date, setDueDate] = useState("");
  const [duration, setDuration] = useState("");
  const [status, setStatus] = useState("on_time");

  useEffect(() => {
    fetchProjects();
    fetchClients();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/projects");
      setProjects(res.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const fetchClients = async () => {
    try {
      const res = await axios.get("http://localhost:5000/clients");
      setClients(res.data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  const handleCreateProject = async () => {
    try {
      await axios.post("http://localhost:5000/projects", {
        project_code,
        description,
        client_id,
        start_date,
        due_date,
        duration,
        status,
      });

      setShowProjectModal(false);
      fetchProjects();
      resetProjectForm();
    } catch (error) {
      console.error("Error creating project", error);
    }
  };

  const resetProjectForm = () => {
    setProjectCode("");
    setDescription("");
    setClientId("");
    setStartDate("");
    setDueDate("");
    setDuration("");
    setStatus("on_time");
  };

  // Crear grupos para la línea de tiempo
  const groups = projects.map((project, index) => ({
    id: index + 1,
    title: project.description,
  }));

  // Crear elementos en la línea de tiempo
  const items = projects.map((project, index) => ({
    id: index + 1,
    group: index + 1,
    title: project.description,
    start_time: dayjs(project.start_date).valueOf(),
    end_time: dayjs(project.due_date).valueOf(),
    canMove: false,
    canResize: false,
    canChangeGroup: false,
  }));

  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 Project Timeline</h2>

      {/* Botones */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <Button variant="contained" color="primary" onClick={fetchProjects}>
          REFRESH PROJECTS
        </Button>
        <Button variant="contained" color="secondary" onClick={() => setShowProjectModal(true)}>
          ADD PROJECT
        </Button>
      </div>

      {/* Timeline de proyectos */}
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={dayjs().subtract(1, "month").valueOf()}
        defaultTimeEnd={dayjs().add(2, "month").valueOf()}
        sidebarWidth={200}
        lineHeight={60}
        itemHeightRatio={0.7}
        canMove={false}
        canResize={false}
        canChangeGroup={false}
      />

      {/* Modal para agregar un nuevo proyecto */}
      <Dialog open={showProjectModal} onClose={() => setShowProjectModal(false)}>
        <DialogTitle>Add Project</DialogTitle>
        <DialogContent>
          <TextField fullWidth margin="dense" label="Project Code" value={project_code} onChange={(e) => setProjectCode(e.target.value)} />
          <TextField fullWidth margin="dense" label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          
          <FormControl fullWidth margin="dense">
            <InputLabel>Select Client</InputLabel>
            <Select value={client_id} onChange={(e) => setClientId(e.target.value)}>
              {clients.map((client) => (
                <MenuItem key={client.id} value={client.id}>
                  {client.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField fullWidth type="date" margin="dense" label="Start Date" InputLabelProps={{ shrink: true }} value={start_date} onChange={(e) => setStartDate(e.target.value)} />
          <TextField fullWidth type="date" margin="dense" label="Due Date" InputLabelProps={{ shrink: true }} value={due_date} onChange={(e) => setDueDate(e.target.value)} />
          <TextField fullWidth type="number" margin="dense" label="Duration (days)" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowProjectModal(false)}>Cancel</Button>
          <Button onClick={handleCreateProject} variant="contained" color="primary">
            Save Project
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Dashboard;

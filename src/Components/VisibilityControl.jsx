export const VisibilityControl = ({
  isChecked,
  setShowCompleted,
  cleanTasks,
}) => {
  const handleDelete = () => {
    if (
      window.confirm("Estas seguro de querer vaciar las tareas completadas?")
    ) {
      cleanTasks();
    }
  };

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        <label>Mostrar tareas completadas</label>
      </div>
      <button className="btn btn-danger btn-sm" onClick={handleDelete}>
        Borrar
      </button>
    </div>
  );
};

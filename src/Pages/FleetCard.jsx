function FleetCard() {
	const FeltCard = React.memo(function FleetCard({data, onUpdate, onToggle, onDelete}) {
			function updateDriver() {
				const name = prompt("Enter the driver name");
				if (name && name.trim()) {
					onUpdate(data.id, name);
				}

			}

		},[])
		return (
			<>
				<button onClick={updateDriver}>update driver</button>
				<button onClick={
					() => {
						onToggle(data.id)
					}
				}>Toggle</button>
				<button onClick={
					() => {
						onDelete(data.id)
					}
				}>Delete</button>


			</>
		)

	}
)

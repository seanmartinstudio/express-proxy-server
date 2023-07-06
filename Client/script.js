const fetchPopulation = () => {
    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => renderData(data.data[0].Population))
      .catch(error => {
        console.log('Error fetching local time:', error)
      });
  }

  const renderData = (data) => {
    let element = document.getElementById(`population`)
    element.innerText = data
  }

  fetchPopulation()
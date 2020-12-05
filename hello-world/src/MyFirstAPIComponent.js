import React from 'react';

export default function MyFirstAPIComponent() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  React.useEffect(() => {
    fetch("https://api.github.com/users/hacktivist123")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
          <li>Yo</li>
          <li>Yo</li>
          <li>Yo</li>
          <li>{items.login}</li>
          <li>{items.bio}</li>
        {/* {items.map(item => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))} */}
      </ul>
    );
  }
}

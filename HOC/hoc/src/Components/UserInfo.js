export const UserInfo = ({user}) => {
    const { name, age, hairColor, hobbies } = user||{}
    return user ? (<>
        <h3>
            {name}
        </h3>
        <p>Age:{age}</p>
        <p>Hair Color:{hairColor}</p>
        <h3>Hobbies:</h3>
    </>): <p>...loading</p>;
}
import "./style.scss";

export const SelectInput = ({array, className, name, onChange, placeholder}) => {
  
  
    return (
        <select 
        className={`select-iterator ${className && className}`}
        name={name}
        onChange={onChange}
        >
            <option>{placeholder? placeholder : ""}</option>
            {array.map((element, key) => {
                return <option key={key}>{element}</option>;
            })}
        </select>
  );

};

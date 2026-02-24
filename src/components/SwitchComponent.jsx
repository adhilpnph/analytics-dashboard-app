
import Switch from "react-switch";

export default function SwitchComponent({checked}) {
  
    return(
      
        
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      
    );
  
}
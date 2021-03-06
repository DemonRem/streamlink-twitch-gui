import { get } from "@ember/object";
import InputBtnComponent from "./InputBtnComponent";


export default InputBtnComponent.extend({
	classNames: [ "check-box-component" ],

	click() {
		if ( get( this, "disabled" ) ) { return; }
		this.toggleProperty( "checked" );
	}
});

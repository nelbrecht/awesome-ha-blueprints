(self.webpackChunkawesome_ha_blueprints=self.webpackChunkawesome_ha_blueprints||[]).push([[818],{113:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var n=o(2122),r=o(9756),i=(o(7294),o(3905)),s=o(4920),a=["components"],l={title:"Philips Hue Dimmer switch",description:"Controller automation for executing any kind of action triggered by the provided Philips Hue Dimmer switch. Supports deCONZ, ZHA, Zigbee2MQTT."},p=void 0,u={unversionedId:"blueprints/controllers/philips_324131092621",id:"blueprints/controllers/philips_324131092621",isDocsHomePage:!1,title:"Philips Hue Dimmer switch",description:"Controller automation for executing any kind of action triggered by the provided Philips Hue Dimmer switch. Supports deCONZ, ZHA, Zigbee2MQTT.",source:"@site/docs/blueprints/controllers/philips_324131092621.mdx",sourceDirName:"blueprints/controllers",slug:"/blueprints/controllers/philips_324131092621",permalink:"/awesome-ha-blueprints/docs/blueprints/controllers/philips_324131092621",editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/controllers/philips_324131092621.mdx",version:"current",frontMatter:{title:"Philips Hue Dimmer switch",description:"Controller automation for executing any kind of action triggered by the provided Philips Hue Dimmer switch. Supports deCONZ, ZHA, Zigbee2MQTT."}},d=[{value:"Description",id:"description",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Available Hooks",id:"available-hooks",children:[{value:"Light",id:"light",children:[]},{value:"Media Player",id:"media-player",children:[]}]},{value:"Additional Notes",id:"additional-notes",children:[{value:"Helper - Last Controller Event",id:"helper---last-controller-event",children:[]},{value:"Virtual double press events",id:"virtual-double-press-events",children:[]}]},{value:"Changelog",id:"changelog",children:[]}],c={toc:d};function h(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Lu,{id:"philips_324131092621",category:"controllers",mdxType:"ImportCard"}),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This blueprint is part of the ",(0,i.kt)("strong",{parentName:"p"},"Controllers-Hooks Ecosystem"),". You can read more about this topic ",(0,i.kt)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem"},"here"),"."))),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This blueprint provides universal support for running any custom action when a button is pressed on the provided Philips Hue Dimmer switch. Supports controllers integrated with deCONZ, ZHA, Zigbee2MQTT. Just specify the integration used to connect the remote to Home Assistant when setting up the automation, and the blueprint will take care of all the rest."),(0,i.kt)("p",null,"In addition of being able to provide custom actions for every kind of button press supported by the remote, the blueprint allows to loop the long press actions while the corresponding button is being held. Once released, the loop stops. This is useful when holding down a button should result in a continuous action (such as lowering the volume of a media player, or controlling a light brightness)."),(0,i.kt)("p",null,"The blueprint also adds support for virtual double button press events, which are not exposed by the controller itself."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Automations created with this blueprint can be connected with one or more ",(0,i.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks"},"Hooks")," supported by this controller.\nHooks allow to easily create controller-based automations for interacting with media players, lights, covers and more. See the list of ",(0,i.kt)("a",{parentName:"p",href:"/docs/blueprints/controllers/philips_324131092621#available-hooks"},"Hooks available for this controller")," for additional details."))),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)(s.nb,{id:"deconz",mdxType:"Requirement"}),(0,i.kt)(s.nb,{id:"zha",mdxType:"Requirement"}),(0,i.kt)(s.nb,{id:"zigbee2mqtt",mdxType:"Requirement"}),(0,i.kt)(s.nb,{name:"Input Text Integration",required:!0,mdxType:"Requirement"},(0,i.kt)("p",null,"This integration provides the entity which will be used to store the last button event. It's required when using ZHA to integrate the remote, as well as when using double press events. This should be activated by default so unless you tweaked the default configuration you're good to go."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/input_text/"},"Input Text Integration Docs"))),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)(s.II,{name:"Integration",description:"Integration used for connecting the remote with Home Assistant. Select one of the available values.",selector:"select",required:!0,mdxType:"Input"}),(0,i.kt)(s.II,{name:"Controller Device",description:"The controller device to use for the automation. Choose a value only if the remote is integrated with deCONZ, ZHA.",selector:"device",required:"deCONZ, ZHA",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Controller Entity",description:"The action sensor of the controller to use for the automation. Choose a value only if the remote is integrated with Zigbee2MQTT.",selector:"entity",required:"Zigbee2MQTT",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Helper - Last Controller Event",description:"Input Text used to store the last event fired by the controller. You will need to manually create a text input entity for this, please read the blueprint Additional Notes for more info.",selector:"entity",required:!0,mdxType:"Input"}),(0,i.kt)(s.II,{name:"On button - short press",description:"Action to run on short on button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"On button - long press",description:"Action to run on long on button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"On button - release after long press",description:"Action to run on on button release after a long press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"On button - double press",description:"Action to run on double on button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Off button - short press",description:"Action to run on short off button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Off button - long press",description:"Action to run on long off button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Off button - release after long press",description:"Action to run on off button release after a long press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Off button - double press",description:"Action to run on double off button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Up button - short press",description:"Action to run on short up button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Up button - long press",description:"Action to run on long up button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Up button - release after long press",description:"Action to run on up button release after a long press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Up button - double press",description:"Action to run on double up button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Down button - short press",description:"Action to run on short down button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Down button - long press",description:"Action to run on long down button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Down button - release after long press",description:"Action to run on down button release after a long press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Down button - double press",description:"Action to run on double down button press.",selector:"action",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Long on button press - loop until release",description:"Loop the action until the on button is released.",selector:"boolean",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Long on button press - Maximum loop repeats",description:"Maximum number of repeats for the custom action, when looping is enabled. Use it as a safety limit to prevent an endless loop in case the corresponding stop event is not received.",selector:"number",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Long off button press - loop until release",description:"Loop the action until the off button is released.",selector:"boolean",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Long off button press - Maximum loop repeats",description:"Maximum number of repeats for the custom action, when looping is enabled. Use it as a safety limit to prevent an endless loop in case the corresponding stop event is not received.",selector:"number",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Long up button press - loop until release",description:"Loop the action until the up button is released.",selector:"boolean",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Long up button press - Maximum loop repeats",description:"Maximum number of repeats for the custom action, when looping is enabled. Use it as a safety limit to prevent an endless loop in case the corresponding stop event is not received.",selector:"number",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Long down button press - loop until release",description:"Loop the action until the down button is released.",selector:"boolean",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Long down button press - Maximum loop repeats",description:"Maximum number of repeats for the custom action, when looping is enabled. Use it as a safety limit to prevent an endless loop in case the corresponding stop event is not received.",selector:"number",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Expose on button double press event",description:"Choose whether or not to expose the virtual double press event for the on button. Turn this on if you are providing an action for the on button double press event.",selector:"boolean",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Expose off button double press event",description:"Choose whether or not to expose the virtual double press event for the off button. Turn this on if you are providing an action for the off button double press event.",selector:"boolean",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Expose up button double press event",description:"Choose whether or not to expose the virtual double press event for the up button. Turn this on if you are providing an action for the up button double press event.",selector:"boolean",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Expose down button double press event",description:"Choose whether or not to expose the virtual double press event for the down button. Turn this on if you are providing an action for the down button double press event.",selector:"boolean",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Helper - Double Press delay",description:"Max delay between the first and the second button press for the double press event. Provide a value only if you are using a double press action. Increase this value if you notice that the double press action is not triggered properly.",selector:"number",mdxType:"Input"}),(0,i.kt)(s.II,{name:"Helper - Debounce delay",description:"Delay used for debouncing RAW controller events, by default set to 0. A value of 0 disables the debouncing feature. Increase this value if you notice custom actions or linked Hooks running multiple times when interacting with the device. When the controller needs to be debounced, usually a value of 100 is enough to remove all duplicate events.",selector:"number",mdxType:"Input"}),(0,i.kt)("h2",{id:"available-hooks"},"Available Hooks"),(0,i.kt)("h3",{id:"light"},"Light"),(0,i.kt)("p",null,"This Hook blueprint allows to build a controller-based automation to control a light. Supports brightness and color control both for white temperature and rgb lights."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On button short press -> Turn on"),(0,i.kt)("li",{parentName:"ul"},"On button long press & hold -> Color up (continuous, until release)"),(0,i.kt)("li",{parentName:"ul"},"Off button short press -> Turn off"),(0,i.kt)("li",{parentName:"ul"},"Off button long press & hold -> Color down (continuous, until release)"),(0,i.kt)("li",{parentName:"ul"},"Up button short press -> Brightness up"),(0,i.kt)("li",{parentName:"ul"},"Up button long press & hold -> Brightness up (continuous, until release)"),(0,i.kt)("li",{parentName:"ul"},"Down button short press -> Brightness down"),(0,i.kt)("li",{parentName:"ul"},"Down button long press & hold -> Brightness down (continuous, until release)")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks/light"},"Light Hook docs")),(0,i.kt)("h3",{id:"media-player"},"Media Player"),(0,i.kt)("p",null,"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On button short press -> Play/Pause"),(0,i.kt)("li",{parentName:"ul"},"On button long press & hold -> Next Track"),(0,i.kt)("li",{parentName:"ul"},"Off button short press -> Stop"),(0,i.kt)("li",{parentName:"ul"},"Off button long press & hold -> Previous track"),(0,i.kt)("li",{parentName:"ul"},"Up button short press -> Volume up"),(0,i.kt)("li",{parentName:"ul"},"Up button long press & hold -> Volume up (continuous, until release)"),(0,i.kt)("li",{parentName:"ul"},"Down button short press -> Volume down"),(0,i.kt)("li",{parentName:"ul"},"Down button long press & hold -> Volume down (continuous, until release)")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks/media_player"},"Media Player Hook docs")),(0,i.kt)("h2",{id:"additional-notes"},"Additional Notes"),(0,i.kt)("h3",{id:"helper---last-controller-event"},"Helper - Last Controller Event"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"helper_last_controller_event")," (Helper - Last Controller Event) input serves as a permanent storage area for the automation. The stored info is used to implement the blueprint's core functionality. To learn more about the helper, how it's used and why it's required, you can read the dedicated section in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem#helper---last-controller-event-input"},"Controllers-Hooks Ecosystem documentation"),"."),(0,i.kt)("h3",{id:"virtual-double-press-events"},"Virtual double press events"),(0,i.kt)("p",null,"It's also important to note that the controller doesn't natively support double press events. Instead , this blueprint provides virtual double press events. You can read more about them in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem#virtual-events"},"general Controllers-Hooks Ecosystem documentation"),"."),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"2021-03-27"),": first blueprint version \ud83c\udf89")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"2021-04-19"),": Fix double press events not being detected with deCONZ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"2021-04-23"),": Fix deCONZ events not being recognized")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"2021-05-26"),":"),(0,i.kt)("p",{parentName:"li"},"\u26a0\ufe0f ",(0,i.kt)("strong",{parentName:"p"},"Breaking Change"),":"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"helper_last_controller_event")," is now a mandatory input. It also simplifies the blueprint setup (reducing issues due to improper configuration missing the helper, which was required only in certain conditions as was stated in the docs), and provides support for advanced features which might be developed in the future."),(0,i.kt)("p",{parentName:"li"},"If you plan to update this blueprint, please make sure to provide a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"input_text")," entity for the ",(0,i.kt)("inlineCode",{parentName:"p"},"helper_last_controller_event")," input. You should create a separate ",(0,i.kt)("inlineCode",{parentName:"p"},"input_text")," for each Controller blueprint you're configuring, since using the same for multiple automation could lead to inconsistencies and undefined behaviour."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Other changes:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf89 Add Debouncing support. Debouncing avoids duplicate action runs which might occur with certain controllers and integrations. The feature is disabled by default, check the documentation to find out how to enable it"),(0,i.kt)("li",{parentName:"ul"},"Prevent undesired endless loops, which might occur in rare cases when the corresponding stop event is not received, by running loop actions a finite number of times, customizable with four new blueprint inputs"),(0,i.kt)("li",{parentName:"ul"},"Fix inputs wrongly marked as required"),(0,i.kt)("li",{parentName:"ul"},"Fix for Zigbee2MQTT reporting null state changes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"2021-08-02"),": Improve inputs documentation and organization"))))}h.isMDXComponent=!0}}]);
/// <reference path="/Users/arnold.zhou/Documents/VSC/Javascript/OpecRCT/openrct2.d.ts"/> 

const NAME = "Pathbuilder";
const VERS = "1.0";
registerPlugin(
    {
        "name": NAME,
        "version": VERS,
        "type": "remote",
        "authors": "mrmagic",
        "licence": "MIT",
        "main": main
    }
);


function main () {
    park.postMessage(
        {
            type: "award",
            text: NAME + " has been loaded!"
        }
    );

    context.subscribe("action.execute", function (e) {
        
    });
}
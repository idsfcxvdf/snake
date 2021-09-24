import Controller from "./Controller/Controller";
import Model from "./Model/Model";
import View from "./View/View";
import Field from "./Model/Field";
import Head from "./Model/Head";
import Tail from "./Model/Tail";
import Apple from "./Model/Apple";

const model = new Model(Field, Head, Tail, Apple);
const view = new View();
const controller = new Controller(model, view);

controller.game();

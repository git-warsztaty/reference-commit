import { createRenderer, CreateAppFunction } from '@vue/runtime-core';
import { QMainWindow } from '@nodegui/nodegui';
import rendererOptions from './nodeOps';

const renderer = createRenderer(rendererOptions);

export const createApp: CreateAppFunction<any> = (...args) => {
  const app = renderer.createApp(...args);

  const { mount } = app;
  app.mount = () => {
    const container = new QMainWindow();
    container.show();
    global.win = container;
    return mount(container);
  };

  return app;
};

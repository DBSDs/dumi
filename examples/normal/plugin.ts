import { IApi } from '../..';

export default (api: IApi) => {
  api.addContentTab(() => ({
    key: 'test',
    component: require.resolve('./a.tsx'),
    extra: require.resolve('./extra.tsx'),
    action: require.resolve('./actions.tsx'),
  }));

  api.addContentTab(() => ({
    key: 'test2',
    component: require.resolve('./a.tsx'),
  }));
};

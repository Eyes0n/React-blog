import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Route } from 'react-router-dom';

const App = () => {
  const SplitLoginPage = lazy(() => import('./pages/LoginPage'));
  const SplitPostListPage = lazy(() => import('./pages/PostListPage'));
  const SplitPostPage = lazy(() => import('./pages/PostPage'));
  const SplitRegisterPage = lazy(() => import('./pages/RegisterPage'));
  const SplitWritePage = lazy(() => import('./pages/WritePage'));
  return (
    <>
      <Helmet>
        <title>REACTERS</title>
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        <Route
          component={SplitPostListPage}
          path={[`/@:username`, '/']}
          exact
        />
        <Route component={SplitLoginPage} path={['/login']} />
        <Route component={SplitRegisterPage} path={['/register']} />
        <Route component={SplitWritePage} path={['/write']} />
        <Route component={SplitPostPage} path={'/@:username/:postId'} />
      </Suspense>
    </>
  );
};

export default App;

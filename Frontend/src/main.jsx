import { createRoot } from 'react-dom/client'
import './index.css'
import RootLayout from './RootLayout.jsx'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import {createRouter,RouterProvider} from '@tanstack/react-router';
import {routeTree} from './routing/routeTree.js';
import { Provider } from 'react-redux';
import store from './store/store.js';

const queryClient = new QueryClient()
const router = createRouter({
    routeTree,
    context:{
        store,
        queryClient
    }
})


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
    </Provider> 
)

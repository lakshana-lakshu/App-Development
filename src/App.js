import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthForm, { action as authAction } from "./components/Forms/AuthForm";
import KitchenDetails, {
  loader as kitchenDetailsLoader,
} from "./pages/KitchenDetails";
import CartProvider from "./store/CartProvider";
import Main, { loader as kitchensListLoader } from "./pages/Main";
import Cart, { action as orderAction } from "./pages/Cart";
import CartLayout from "./components/Layouts/CartLayout";
import BackdropLayout from "./components/Layouts/BackdropLayout";
import ModifyDish, {
  action as ModifyDishAction,
} from "./components/Kitchen/ModifyDish";
import ErrorPage from "./components/ErrorPage";
import MyKitchen, { loader as myKitchenLoader } from "./pages/MyKitchen";
import { logout } from "./util/logout";
import Orders from "./pages/Orders";
import ModifyKitchen, {
  action as modifyKitchenAction,
} from "./components/Kitchen/ModifyKitchen";
import EditAccountForm, {
  action as editAccountAction,
} from "./components/Forms/EditAccountForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CartLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Main />, loader: kitchensListLoader },
        {
          path: "/auth",
          element: <BackdropLayout />,
          children: [
            { index: true, element: <AuthForm />, action: authAction },
          ],
        },
        {
          path: "/edit-account",
          element: <BackdropLayout />,
          children: [
            {
              index: true,
              element: <EditAccountForm />,
              action: editAccountAction,
            },
          ],
        },
        {
          path: "/logout",
          loader: logout,
        },
        {
          path: "/kitchens/:id",
          loader: kitchenDetailsLoader,
          element: <KitchenDetails />,
        },
        {
          path: "/add-kitchen",
          element: <BackdropLayout />,
          children: [
            {
              index: true,
              action: modifyKitchenAction,
              element: <ModifyKitchen />,
            },
          ],
        },
        {
          path: "/edit-kitchen",
          element: <BackdropLayout />,
          children: [
            {
              index: true,
              action: modifyKitchenAction,
              element: <ModifyKitchen />,
            },
          ],
        },
        {
          path: "/my-kitchen",
          element: <MyKitchen />,
          loader: myKitchenLoader,
        },
        {
          path: "/add-dish",
          element: <BackdropLayout />,
          children: [
            {
              index: true,
              action: ModifyDishAction,
              element: <ModifyDish />,
            },
          ],
        },
        {
          path: "/edit-dish",
          element: <BackdropLayout />,
          children: [
            {
              index: true,
              action: ModifyDishAction,
              element: <ModifyDish />,
            },
          ],
        },
        {
          path: "/cart",
          element: <Cart />,
          action: orderAction,
        },
        {
          path: "/view-orders/:id",
          element: <Orders />,
        },
      ],
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;




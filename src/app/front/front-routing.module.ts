import { NgModule } from '@angular/core';
import { AuthGuard } from '../share/user_guard.service';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './body/cart/cart.component';
import { CheckoutComponent } from './body/checkout/checkout.component';
import { ContactusComponent } from './body/contactus/contactus.component';
import { HomeComponent } from './body/home/home.component';
import { LoginComponent } from './body/login/login.component';
import { MyaccountComponent } from './body/myaccount/myaccount.component';
import { ProductDetailComponent } from './body/product-detail/product-detail.component';
import { ProductsComponent } from './body/products/products.component';
import { WishListComponent } from './body/wish-list/wish-list.component';
import { AboutComponent } from './body/about/about.component';

const routes: Routes = [
  // { path: '', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect to
  { path: 'home', component: HomeComponent },
  {
    path: 'product-detail/:slug',
    component: ProductDetailComponent,
    canActivate: [AuthGuard],
  },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent },
  {
    path: 'my-account',
    component: MyaccountComponent,
    canActivate: [AuthGuard],
  },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'wishlist', component: WishListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class FrontRoutingModule {}

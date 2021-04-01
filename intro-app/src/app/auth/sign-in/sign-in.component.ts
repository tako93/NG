import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GuardsCheckStart, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import { SignInData } from 'src/app/data/sign-in-form.interface';
import { TOKEN_KEY } from 'src/app/shared/constants';
import { AuthService } from '../shared/auth.service';
import { FirebaseAuthService } from '../shared/firebase-auth.service';
// import { User } from '../../data/user-data.interface';
// import { UserRole } from '../../data/user-roles.interface';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  // private activeUser: User = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   avatar: '',
  //   role: UserRole.guest,
  // 'eve.holt@reqres.in','cityslicka',}
  signInData: SignInData = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
    remember: false,
  };
  constructor(
    private router: Router,
    private _authService: AuthService,
    private storageService: LocalStorageService,
    private fireAuthService: FirebaseAuthService,
  ) { }

  ngOnInit(): void { }

  async onSubmit(signInForm: NgForm) {
    // this._authService
    //   .signIn(this.signInData)
    //   .subscribe((isAuthorized: boolean) => {
    //       if (this._authService.redirectUrl != '') {
    //        this.router.navigateByUrl(this._authService.redirectUrl);
    //       } else {
    //         this.router.navigate(['auth/dashboard']);

    //     }
    //   });


    // try {
    //   const result = await this._authService.firebaseSignIn(this.signInData);

    //   const IdTokenResult = await result.user?.getIdTokenResult();
    //   // result.user?.refreshToken
    //   if (IdTokenResult?.token) {
    //     this.storageService.set(TOKEN_KEY, IdTokenResult.token);
    //     if (this._authService.redirectUrl != '') {
    //       this.router.navigateByUrl(this._authService.redirectUrl);
    //     } else {
    //       this.router.navigate(['auth/dashboard']);

    //     }
    //   }
    // } catch (err) {
    //   console.log(err)
    // }


    this.fireAuthService.signIn(this.signInData)
  }

  signInWithGoogle() {
    this.fireAuthService.googleSignIn()
  }
}
 //ფორმაში შექმნილი პარამეტ.
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from './models/Profile.model';


@Injectable({
  providedIn: 'root'

})
export class ProfileService {


 private profiles: Profile[] = [
    {
      id:1,
      name: 'John Doe',
      role: 'Software Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverr.',
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&s',
      location: {
        lat: 40.7128, 
        lng: -74.0060  
      }
    },
    {
      id:2,
      name: 'Jane Smith',
      role: 'UX Designer',
      description: 'Nullam mattis tortor in libero ultrices, vel commodo velit lacinia.',
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8tusw5j5lPA75Cs7g-Such_ylT-2CnarpjxEW2Ul7qOghTWNFh7HBEWDPmDHAPuOEFI&usqp=CAU',
      location: {
        lat: 40.7128, 
        lng: -74.0060  
      }
    },
    {
      id:3,
      name: 'Michael Johnson',
      role: 'Marketing Manager',
      description: 'Fusce gravida justo in ante scelerisque, id suscipit metus dapibus.',
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4IrtgqBNO3bSBLVwhOPysNwRYz5SBoEUR6Q&s',
      location: {
        lat: 40.7128, 
        lng: -74.0060  
      }
    },
    {
      id:4,
      name: 'sim Smith',
      role: 'UX Designer',
      description: 'Nullam mattis tortor in libero ultrices, vel commodo velit lacinia.',
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1xWd6F43TWRndAPgysTujX9S_GNBrDu0ZQ&s',
      location: {
        lat: 40.7128, 
        lng: -74.0060  
      }
    },
    {
      id:5,
      name: 'look Smith',
      role: 'UX Designer',
      description: 'Nullam mattis tortor in libero ultrices, vel commodo velit lacinia.',
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxsG3Ac8-CCLG3PzEvZXAfVoQxmjHleJqjg&s',
      location: {

        lat: 40.7128, 
        lng: -74.0060  
      }
    },
    {
      id:6,
      name: 'jany Smith',
      role: 'UX Designer',
      description: 'Nullam mattis tortor in libero ultrices, vel commodo velit lacinia.',
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7VZrCB-KmQ8lpburT-mcYkQ2Tk3blBeM3w&s',
      location: {
        lat: 40.7128, 
        lng: -74.0060  
      }
    },

  ];

  constructor() {}

 getProfiles(): Profile[] {
    return this.profiles;
  }

  getProfileById(id: number): Profile | undefined {
    return this.profiles.find(profile => profile.id === id);
  }

  addProfile(profile: Profile): void {
    this.profiles.push(profile);
  }

  updateProfile(profile: Profile): void {
    const index = this.profiles.findIndex(p => p.id === profile.id);
    if (index !== -1) {
      this.profiles[index] = profile;
    }
  }

  deleteProfile(id: number): void {
    console.log('Deleting profile with ID:', id);
    const index = this.profiles.findIndex(profile => profile.id === id);
    if (index !== -1) {
      this.profiles.splice(index, 1);
      console.log('Profile deleted:', id);
    } else {
      console.log('Profile not found:', id);
    }
  }
}


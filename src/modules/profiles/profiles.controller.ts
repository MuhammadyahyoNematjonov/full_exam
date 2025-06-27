    import { Controller, Get, Put, Param, Body, Delete } from '@nestjs/common';
    import { ProfilesService } from './profiles.service';

    @Controller('profile')
    export class ProfileController {
    constructor(private readonly profilesService: ProfilesService) {}

    @Get('all')
    getAllUsers() {
        return this.profilesService.findAll();
    }

    @Put('put/:id')
    updateUser(@Param('id') id: string, @Body() body: any) {
        return this.profilesService.update(id, body);
    }
    @Delete(':id')
    deleteUser(@Param('id') id: string) { 
    return this.profilesService.delete(id);
  }

    }


     
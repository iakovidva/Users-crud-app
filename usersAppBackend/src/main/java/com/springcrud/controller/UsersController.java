package com.springcrud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springcrud.entity.User;
import com.springcrud.service.UsersService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UsersController {
	
    @Autowired private UsersService usersService;
    
	// Save user 
    @PostMapping("/users")
    public User saveDepartment(@Validated @RequestBody User user){
        return usersService.saveUser(user);
    }
 
    // Get all users
    @GetMapping("/users")
    public List<User> fetchDepartmentList(){
        return usersService.fetchUserList();
    }
    
    // Get user by id
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable("id") Integer userId){
        return usersService.getUser(userId);
    }
 
    // Update user by id
    @PutMapping("/users/{id}")
    public User updateDepartment(@RequestBody User user, @PathVariable("id") Integer userId){
    	User upd = usersService.updateUser(user);
        return upd;
    }
 
    // Delete user by id
    @DeleteMapping("/users/{id}")
    public String deleteDepartmentById(@PathVariable("id") Integer userId){
    	usersService.deleteUsertById(userId);
        return "Deleted Successfully";
    }

}

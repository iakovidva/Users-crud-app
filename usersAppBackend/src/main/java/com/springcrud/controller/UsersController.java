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
    
	// Save operation
    @PostMapping("/users")
    public User saveDepartment(@Validated @RequestBody User user){
        return usersService.saveUser(user);
    }
 
    // Read operation
    @GetMapping("/users")
    public List<User> fetchDepartmentList(){
        return usersService.fetchUserList();
    }
    
    // Read operation
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable("id") Integer userId){
        return usersService.getUser(userId);
    }
 
    // Update operation
    @PutMapping("/users/{id}")
    public User updateDepartment(@RequestBody User user, @PathVariable("id") Integer userId){
    	System.out.println(user);
    	User upd = usersService.updateUser(user);
        return upd;
    }
 
    // Delete operation
    @DeleteMapping("/users/{id}")
    public String deleteDepartmentById(@PathVariable("id") Integer userId){
    	usersService.deleteUsertById(userId);
        return "Deleted Successfully";
    }

}

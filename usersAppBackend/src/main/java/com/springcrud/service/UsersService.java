package com.springcrud.service;

import java.util.List;

import com.springcrud.entity.User;

public interface UsersService {
	
	// Save user 
    User saveUser(User user);
 
    // Get all users
    List<User> fetchUserList();
    
    // Get user by id
    User getUser (Integer userId);
 
    // Update user by id
    User updateUser(User user);
 
    // Delete user by id
    void deleteUsertById(Integer userId);
}

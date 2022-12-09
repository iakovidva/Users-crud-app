package com.springcrud.service;

import java.util.List;

import com.springcrud.entity.User;

public interface UsersService {
	 // Save operation
    User saveUser(User user);
 
    // Read operation
    List<User> fetchUserList();
    
    User getUser (Integer userId);
 
    // Update operation
    User updateUser(User user);
 
    // Delete operation
    void deleteUsertById(Integer userId);
}

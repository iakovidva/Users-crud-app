package com.springcrud.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springcrud.entity.User;
import com.springcrud.repository.UsersRepository;

import jakarta.transaction.Transactional;

@Service
public class UsersServiceImpl implements UsersService{

	@Autowired
    private UsersRepository usersRepository;

	// Save user 
	@Override
	public User saveUser(User user) {
		return usersRepository.save(user);
	}
	
	// Get all users
	@Override
	public List<User> fetchUserList() {
		return (List<User>) usersRepository.findAll();
	}
	
	// Get user by id
	@Override
	public User getUser(Integer userId) {
		return (User) usersRepository.findById(userId).get();
	}

	// Update user by id
	@Transactional
    public User updateUser(User newUser) {
		Optional<User> userEntity = usersRepository.findById(newUser.getId());
		User user = userEntity.get();
		user.setName(newUser.getName());
		user.setSurname(newUser.getSurname());
		user.setGender(newUser.getGender());
		user.setBirthdate(newUser.getBirthdate());
		user.setWork_address(newUser.getWork_address());
		user.setHome_address(newUser.getHome_address());
		
		return usersRepository.save(user);
    }

	// Delete user by id
	@Override
	public void deleteUsertById(Integer userId) {
		usersRepository.deleteById(userId);
	}



}

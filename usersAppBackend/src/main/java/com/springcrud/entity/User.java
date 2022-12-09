package com.springcrud.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String name;
	private String surname;
	private String gender;
	private String birthdate;
	private String work_address;
	private String home_address;
	
	public User() {
	}
	
	public User(String name, String surname, String gender, String birthdate, String work_address, String home_address) {
		super();
		this.name = name;
		this.surname = surname;
		this.gender = gender;
		this.birthdate = birthdate;
		this.work_address = work_address;
		this.home_address = home_address;
	}
	public User(int id, String name, String surname, String gender, String birthdate, String work_address,
			String home_address) {
		super();
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.gender = gender;
		this.birthdate = birthdate;
		this.work_address = work_address;
		this.home_address = home_address;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getBirthdate() {
		return birthdate;
	}
	public void setBirthdate(String birthdate) {
		this.birthdate = birthdate;
	}
	public String getWork_address() {
		return work_address;
	}
	public void setWork_address(String work_address) {
		this.work_address = work_address;
	}
	public String getHome_address() {
		return home_address;
	}
	public void setHome_address(String home_address) {
		this.home_address = home_address;
	}
	
	
}

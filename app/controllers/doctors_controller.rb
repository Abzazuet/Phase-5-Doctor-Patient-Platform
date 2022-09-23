class DoctorsController < ApplicationController
  wrap_parameters format: []
  #before_action :authorize, only: [:index, :show, :update, :destroy]

  def index
    doctors = Doctor.all
    render json: doctors, include: :appointments
  end

  def show
    doctor = Doctor.find(session[:user_id])
    if doctor
      render json: doctor
    else
      render json: { error: "User not created" }, status: :unprocessable_entity
    end
  end

  def create
    doctor = Doctor.create(doctor_params)
    if doctor.valid?
      render json: doctor, status: :created
    else
      render json: { errors: doctor.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    doctor = Doctor.find_by(id: session[:user_id])
    if doctor
      doctor.update(doctor_params)
      render json: doctor
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def destroy
    doctor = Doctor.find_by(id: session[:user_id])
    doctor.destroy
    head :no_content
  end

  private

  def doctor_params
    params.permit(:username, :password, :dob, :specialty, :firstname, :lastname)
  end

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end
end

class PatientsController < ApplicationController
  wrap_parameters format: []
  #before_action :authorize, only: [:index, :show, :update, :destroy]

  def index
    patients = Patient.all
    render json: patients
  end

  def show
    patient = Patient.find(params[:id])
    if patient
      render json: patient
    else
      render json: { error: "User not created" }, status: :unprocessable_entity
    end
  end

  def create
    patient = Patient.create(patient_params)
    if patient.valid?
      render json: patient, status: :created
    else
      render json: { errors: patient.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    patient = Patient.find_by(id: session[:user_id])
    if patient
      patient.update(patient_params)
      render json: patient
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def destroy
    patient = Patient.find_by(id: session[:user_id])
    patient.destroy
    head :no_content
  end

  private

  def patient_params
    params.permit(:username, :password, :dob, :firstname, :lastname)
  end

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end
end

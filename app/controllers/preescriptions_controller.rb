class PreescriptionsController < ApplicationController
  def index
    preescriptions = Preescription.all
    render json: preescriptions
  end

  def show
    preescription = Preescription.find(params[:id])
    if preescription
      render json: preescription
    else
      render json: { error: "Preescription not found" }, status: :unprocessable_entity
    end
  end

  def create
    preescription = Preescription.create(preescription_params)
    render json: preescription, status: :created
  end

  def destroy
    preescription = Preescription.find(params[:id])
    preescription.destroy
    head :no_content
  end

  def update
    preescription = Preescription.find(params[:id])
    if preescription
      preescription.update(preescription_params)
      render json: preescription
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  private

  def preescription_params
    params.permit(:medicine_id, :frequency_id, :appointment_id, :duration_days)
  end
end

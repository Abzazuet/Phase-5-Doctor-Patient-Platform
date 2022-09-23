class MedicinesController < ApplicationController
  def index
    medicines = Medicine.all
    render json: medicines
  end

  def show
    medicine = Medicine.find(params[:id])
    if medicine
      render json: medicine
    else
      render json: { error: "Medicine not in db" }, status: :unprocessable_entity
    end
  end
end

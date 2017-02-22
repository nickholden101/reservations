class ChangeDateFormatInReservation < ActiveRecord::Migration
  def up
    change_column :reservations, :start_date, :datetime
    change_column :reservations, :due_date, :datetime
  end

  def down
    change_column :reservations, :start_date, :date
    change_column :reservations, :due_date, :date
  end
end
